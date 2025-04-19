export class OfMixin {
  [x: string]: any;
  public static of<T extends OfMixin>(this: new () => T, data: any): T {
    const request = new this();
    return Object.assign(request, data);
  }
}
