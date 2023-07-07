import { DecoratorTarget, MetaType } from '@/workshop/lib';

export const metaUtil = {

  getAll<T>(type: MetaType): T[] {
    const data = Reflect.getMetadata(
      MetaType.Module,
      Reflect,
    ) as T[] || [];

    return data;
  }



};