import { News } from "~/types/news";

export class ApiResponse<T> {
  public code: string = "0";
  public data: T | null = null;
}

export class ApiListResponse<T> {
  public code: string = "0";
  public data: T[] = [];
  public count: number = 0;

  static Of<T>(instance: any): ApiListResponse<T> {
    return Object.assign(new ApiListResponse<T>(), instance);
  }
}

export class GCCGlient {
  public async getNewsList(id: number): Promise<ApiListResponse<News>> {
    const countJson = await $fetch(`/news/pagination/index.json`, {
      responseType: "text",
    });
    const count = JSON.parse(countJson as string);
    return $fetch(`/news/pagination/${id}.json`, {
      responseType: "text",
    }).then((resp) => {
      const response = new ApiListResponse<News>();
      response.code = "0";
      response.data = JSON.parse(resp as string);
      response.count = count.count;
      response.data = response.data.map((n) => {
        return News.of(n);
      });
      return response;
    });
  }

  public getNews(id: number): Promise<ApiResponse<News>> {
    return $fetch(`/news/data/${id}.json`, {
      responseType: "text",
    }).then((resp) => {
      const response = new ApiResponse<News>();
      response.code = "0";
      response.data = News.of(JSON.parse(resp as string));
      return response;
    });
  }
}
export function useGCCClient() {
  return new GCCGlient();
}
