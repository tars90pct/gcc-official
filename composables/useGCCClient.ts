import { Influencer } from "~/types/influencer";
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
    const countJson = await $fetch(`/news-static/pagination/index.json`, {
      responseType: "text",
    });
    const count = JSON.parse(countJson as string);
    return $fetch(`/news-static/pagination/${id}.json`, {
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
    return $fetch(`/news-static/data/${id}.json`, {
      responseType: "text",
    }).then((resp) => {
      const response = new ApiResponse<News>();
      response.code = "0";
      response.data = News.of(JSON.parse(resp as string));
      return response;
    });
  }

  public async getInfluencers(): Promise<ApiListResponse<Influencer>> {
    return $fetch(`/influencer-static/pagination/all.json`, {
      responseType: "text",
    }).then((resp) => {
      const response = new ApiListResponse<Influencer>();
      response.code = "0";
      response.data = JSON.parse(resp as string);
      response.data = response.data.map((n) => {
        return Influencer.of(n);
      });
      return response;
    });
  }

  public async getInfluencerList(id: number): Promise<ApiListResponse<Influencer>> {
    const countJson = await $fetch(`/influencer-static/pagination/index.json`, {
      responseType: "text",
    });
    const count = JSON.parse(countJson as string);
    return $fetch(`/influencer-static/pagination/${id}.json`, {
      responseType: "text",
    }).then((resp) => {
      const response = new ApiListResponse<Influencer>();
      response.code = "0";
      response.data = JSON.parse(resp as string);
      response.count = count.count;
      response.data = response.data.map((n) => {
        return Influencer.of(n);
      });
      return response;
    });
  }

  public getInfluencer(id: number): Promise<ApiResponse<Influencer>> {
    return $fetch(`/influencer-static/data/${id}.json`, {
      responseType: "text",
    }).then((resp) => {
      const response = new ApiResponse<Influencer>();
      response.code = "0";
      response.data = Influencer.of(JSON.parse(resp as string));
      return response;
    });
  }
}
export function useGCCClient() {
  return new GCCGlient();
}
