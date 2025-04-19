import { OfMixin } from "./mixin";

export class News extends OfMixin {
  public id: number = 0;
  public title: string = "";
  public description: string = "";
  public updatedAt: string = "";
  public images: string[] = [];

  public trimDescription(): string {
    return this.description.replaceAll("# ", "").replaceAll("# ", "");
  }
}
