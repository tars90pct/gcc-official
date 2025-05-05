import { OfMixin } from "./mixin";

export class Influencer extends OfMixin {
  public id: number = 0;
  public name: string = "";
  public description: string = "";
  public youtube: string = "";
  public twitch: string = "";
  public fb: string = "";
  public ig: string = "";
  public x: string = "";
  public images: string[] = [];

  public trimDescription(): string {
    return this.description.replaceAll("# ", "").replaceAll("# ", "");
  }
}
