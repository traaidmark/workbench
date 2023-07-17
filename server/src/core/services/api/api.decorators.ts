import { inject } from 'inversify';

import { DecoratorTarget, DecoratorType, DecoratorMeta, ConstructorFunction } from '@/core/lib/schema';



import { ApiRouteMeta, ApiEndpointMeta, ApiMiddleware,  ApiMethodType } from '@/core/services/api';
import { CreateProvider, ProviderType } from '@/core/services/provider';

// DECORATOR: HELPERS

export const CreateController = CreateProvider(ProviderType.ApiController);
export const CreateService = CreateProvider(ProviderType.ApiService);
export const CreateRepository = CreateProvider(ProviderType.ApiRepository);

export const InjectRepository = inject(ProviderType.ApiRepository);
export const InjectService = inject(ProviderType.ApiService);

// DECORATOR: CONTROLLER

export function Controller(path: string, ...middleware: ApiMiddleware[]) {
  return function(target: DecoratorTarget): void {

    const current: DecoratorMeta<ApiRouteMeta> = {
      key: (target as { name: string }).name,
      value: {
        path,
        middleware
      },
      target
    }
    
    Reflect.defineMetadata(DecoratorType.Controller, current, target);

    const previousValues: DecoratorMeta<ApiRouteMeta>[] = Reflect.getMetadata(
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

function ApiMethod(method: ApiMethodType) {

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
        DecoratorType.ControllerEndpoint,
        target.constructor
      );
      
      if(!hasMeta) {
        Reflect.defineMetadata(
          DecoratorType.ControllerEndpoint,
          metaList,
          target.constructor
        );
      } else {
        metaList = Reflect.getOwnMetadata(
          DecoratorType.ControllerEndpoint,
          target.constructor,
        );
      }
  
      metaList.push(metaData);

    }
  }
}

export const Get = ApiMethod(ApiMethodType.Get);
export const Post = ApiMethod(ApiMethodType.Post);

