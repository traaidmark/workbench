import { SystemMeta, DecoratorTargetInterface, MetaType } from '@/workshop/lib';

const meta:string = SystemMeta.Util.Meta;

export const metaUtil = {

  addAll<T>(type: MetaType, value: T, target: DecoratorTargetInterface) {
    
    Reflect.defineMetadata(MetaType.Provider, value, target);

    const previousValues: T[] = Reflect.getMetadata(
      type,
      Reflect,
    ) || [];

    const metaArray = [value, ...previousValues];

    Reflect.defineMetadata(
      type,
      metaArray,
      Reflect,
    );
  },

  getAll<T>(type: MetaType): T[] {
    const data = Reflect.getMetadata(
      type,
      Reflect,
    ) as T[] || [];

    return data;
  }



};