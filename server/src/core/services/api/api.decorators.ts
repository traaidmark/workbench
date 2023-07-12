import { DecoratorTarget, DecoratorType, DecoratorMeta, ConstructorFunction } from '@/core/lib/schema';

import { ApiControllerMeta, ApiEndpointMeta, ApiMiddleware,  ApiMethodType } from './api.schema';

// DECORATOR: CONTROLLER

export function Controller(path: string, ...middleware: ApiMiddleware[]) {
  return function(target: DecoratorTarget): void {

    const current: DecoratorMeta<ApiControllerMeta> = {
      key: (target as { name: string }).name,
      value: {
        path,
        middleware
      },
      target
    }

    Reflect.defineMetadata(DecoratorType.Controller, current, target);

    const previousValues: DecoratorMeta<ApiControllerMeta>[] = Reflect.getMetadata(
      DecoratorType.Controller,
      Reflect,
    ) || [];

    const metaArray = [current, ...previousValues];

    Reflect.defineMetadata(
      DecoratorType.Controller,
      metaArray,
      Reflect,
    );

  }
}


// DECORATOR: METHODS

function endpoint(method: ApiMethodType) {

  return function(path: string, ...middleware: ApiMiddleware[]) {
    return function(target: DecoratorTarget, key: string):void  {
  
      const metaData: DecoratorMeta<ApiEndpointMeta> = {
        key,
        value: {
          path,
          middleware,
          method
        },
        target
      };

      
  
      let metaList: DecoratorMeta<ApiEndpointMeta>[] = [];
  
      const hasMeta = Reflect.hasOwnMetadata(
        DecoratorType.ControllerMethod,
        target.constructor
      );
      
      if(!hasMeta) {
        Reflect.defineMetadata(
          DecoratorType.ControllerMethod,
          metaList,
          target.constructor
        );
      } else {
        metaList = Reflect.getOwnMetadata(
          DecoratorType.ControllerMethod,
          target.constructor,
        );
      }
  
      metaList.push(metaData);

    }
  }
}

export const Get = endpoint(ApiMethodType.Get);
export const Post = endpoint(ApiMethodType.Post);