import { OfMixin } from "./mixin";

export class PageQuery extends OfMixin {
  public queries: Record<string, string> = {};
  public page: number = 1;
  public pageSize: number = 20;
  public total: number = 0; // total page

  public static override of<T extends OfMixin>(this: new () => T, data: any): T {
    const request = new this();
    Object.assign(request, data);
    Object.keys(data).forEach((key) => {
      if (key !== "queries" && key !== "page" && key !== "pageSize" && key !== "total") {
        request.queries[key] = `${data[key]}`;
      }
    });
    return request;
  }

  public toUrlQuery(): string {
    const params = new URLSearchParams();

    params.set("page", this.page.toString());
    params.set("pageSize", this.pageSize.toString());

    for (const key in this.queries) {
      if (this.queries.hasOwnProperty(key)) {
        params.set(key, this.queries[key]);
      }
    }

    return params.toString();
  }
}
