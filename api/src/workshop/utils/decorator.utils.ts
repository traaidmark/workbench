import {
  SystemMeta,
  DecoratorTarget,
  MetaType,
  ApiControllerMeta
} from '@/workshop/lib';

const meta:string = SystemMeta.Util.Decorator;

export const decoratorUtil = {

  addAll<T>(type: MetaType, value: T, target: DecoratorTarget) {
    
    Reflect.defineMetadata(MetaType, value, target);

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
    const data: T[] = Reflect.getMetadata(
      type,
      Reflect,
    ) || [];
    return data;
  },



  getFor<T>(type: MetaType, constructor: NewableFunction) {

    const data = Reflect.getOwnMetadata(
      type,
      constructor,
    ) as T;

    console.log(`${meta} FROM PARAMS`, constructor);
    console.log(`${meta} FROM DATA`, data);

    return data;
  },

  getControllers(): DecoratorTarget[] {
    const data: ApiControllerMeta[] = Reflect.getMetadata(
      MetaType.Controller,
      Reflect,
    ) || [];
    return data.map((c) => c.target);
  }

};