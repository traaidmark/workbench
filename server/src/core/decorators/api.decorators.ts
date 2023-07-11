import {
  Int,
  Type
 } from '@/core/lib';

// DECORATOR: CONTROLLER

export function Controller(prefix: string) {
  return function(target: Int.DecoratorTarget): void {

    const current: Int.ApiControllerMeta = {
      name: (target as { name: string }).name,
      prefix,
      target
    }

    // decorate(injectable(), target);
    Reflect.defineMetadata(Type.DecoratorType.Controller, current, target);

    const previousValues: Int.ApiControllerMeta[] = Reflect.getMetadata(
      Type.DecoratorType.Controller,
      Reflect,
    ) || [];

    const metaArray = [current, ...previousValues];

    Reflect.defineMetadata(
      Type.DecoratorType.Controller,
      metaArray,
      Reflect,
    );

  }
}

// DECORATOR: METHODS

function routeBinder(method: Type.ApiMethod) {

  return function(path: string) {
    return function(target: Int.DecoratorTarget, key: string):void  {
  
      const metaData: Int.ApiControllerMethodMeta = {
        key,
        method,
        path,
        target: target[key]
      };
  
      let metaList: Int.ApiControllerMethodMeta[] = [];
  
      const hasMeta = Reflect.hasOwnMetadata(
        Type.DecoratorType.ControllerMethod,
        target.constructor
      );
      
      if(!hasMeta) {
        Reflect.defineMetadata(
          Type.DecoratorType.ControllerMethod,
          metaList,
          target.constructor
        );
      } else {
        metaList = Reflect.getOwnMetadata(
          Type.DecoratorType.ControllerMethod,
          target.constructor,
        );
      }
  
      metaList.push(metaData);

    }
  }
}

export const Get = routeBinder(Type.ApiMethod.Get);
export const Post = routeBinder(Type.ApiMethod.Post);