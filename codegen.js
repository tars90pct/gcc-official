import fs from "fs";
import path, { dirname } from "path";
import { Readable } from "stream";
import { fileURLToPath } from "url";
import axios from "axios";
import csvParser from "csv-parser";

function chunkArray(array, chunkSize) {
  if (!Array.isArray(array) || chunkSize <= 0) {
    return [];
  }
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);

    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

function getExtensionFromContentDisposition(headerString) {
  if (!headerString) {
    return null;
  }
  const regex = /filename=".*(\.[^."]+)"/i;
  const match = headerString.match(regex);
  if (match && match[1]) {
    return match[1]; // match[1] contains the part captured by (\.[^."]+)
  }
  return null;
}

function getDriveFileIdFromUrl(url) {
  const regex = /\/file\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}
async function downloadFileFromDrive(id, fileNamePrefix) {
  const download = `https://drive.google.com/uc?export=download&id=${id}`;
  const response = await axios({
    url: download,
    method: "GET",
    responseType: "stream", // Important: Get the response as a stream
  });
  const extentsion = getExtensionFromContentDisposition(response.headers["content-disposition"]);
  if (extentsion) {
    const output_path = `${fileNamePrefix}${extentsion}`;
    console.log(output_path);
    const writer = fs.createWriteStream(output_path);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", () => {
        resolve(extentsion);
      });

      // Handle errors during the writing process
      writer.on("error", (err) => {
        console.error("Error writing file:", err);
        reject(err);
      });

      // Also handle errors on the download stream itself
      response.data.on("error", (err) => {
        console.error("Error during download stream:", err);
        // Destroy the writer stream to clean up the partial file
        writer.destroy();
        reject(err);
      });
    });
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function ProcessNews() {
  const eventGoogleShreadSheetUrl =
    "https://docs.google.com/spreadsheets/d/1R5oTePXj53eHRflNqghScAx7_IO-MVfRPRSGBhEHT7g/export?format=csv&gid=0";

  const response = await axios.get(eventGoogleShreadSheetUrl, {
    responseType: "text",
  });

  const csvData = response.data;
  const news = await new Promise((resolve, reject) => {
    const results = [];
    const readableStream = Readable.from(csvData);
    readableStream
      .pipe(csvParser())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
  const instanceDataPath = path.resolve(process.cwd(), path.join("public", "news", "data"));
  const newsPromise = news.map(async (element, index) => {
    element["id"] = index;
    const imagesRaw = element.images.trim();
    element["images"] = [];
    if (imagesRaw) {
      const downloadPromises = imagesRaw.split("\n").map(async (viewUrl, imgIdx) => {
        const driveId = getDriveFileIdFromUrl(viewUrl);
        const imageFolder = path.resolve(process.cwd(), path.join("public", "news", "images"));
        const fileName = `${imageFolder}/${index}-${imgIdx}`;
        const extentsion = await downloadFileFromDrive(driveId, fileName);
        return `/news/images/${index}-${imgIdx}${extentsion}`;
      });
      const images = await Promise.all(downloadPromises);
      element["images"] = images;
    }
    const fileName = `${index}.json`;
    const filePath = path.join(instanceDataPath, fileName);
    const jsonData = JSON.stringify(element, null, 2);
    await fs.promises.writeFile(filePath, jsonData, "utf8");
    return element;
  });
  const newsFixed = await Promise.all(newsPromise);
  const newsGroup = chunkArray(newsFixed, 9);
  const paginationPath = path.resolve(process.cwd(), path.join("public", "news", "pagination"));
  newsGroup.forEach(async (group, index) => {
    const fileName = `${index + 1}.json`;
    const filePath = path.join(paginationPath, fileName);
    const jsonData = JSON.stringify(group, null, 2);
    await fs.promises.writeFile(filePath, jsonData, "utf8");
  });
  const paginationIndexPath = path.join(paginationPath, "index.json");
  const paginationIndexData = JSON.stringify({ count: newsGroup.length }, null, 2);
  await fs.promises.writeFile(paginationIndexPath, paginationIndexData, "utf8");
}

await ProcessNews();
