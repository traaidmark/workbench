import { MetaTarget, MetaType } from './meta.schema';

export class MetaUtility {

  private _type: MetaType;

  constructor(t: MetaType) {
    this._type = t;
  }
  
  public register<T>(metaData: T, target: MetaTarget) {

    Reflect.defineMetadata(
      this._type,
      metaData, 
      target
    );

    const previousMetaData: T[] = Reflect.getMetadata(
      this._type,
      Reflect,
    ) || [];

    const metaArray = [metaData, ...previousMetaData];

    Reflect.defineMetadata(
      this._type,
      metaArray,
      Reflect,
    );
  }

  public load<T>(): T[] {
    console.log(`[Meta Util]: Loading metadata for ${this._type}`);
    return Reflect.getMetadata(
      this._type,
      Reflect,
    ) || [];
  }

}