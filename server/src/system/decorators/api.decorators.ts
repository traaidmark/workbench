import { injectable, decorate } from 'inversify';

import {
  DecoratorType,
  DecoratorTarget,
  ApiMethodType,
  ApiControllerMeta,
  ApiControllerMethodMeta,
  ApiRepositoryMeta,
 } from '@/system/lib';

// DECORATOR: REPOSITORY

export function Repository(target: DecoratorTarget): void {

  const current: ApiRepositoryMeta = {
    name: (target as { name: string }).name,
    target
  }

  decorate(injectable(), target);
  Reflect.defineMetadata(DecoratorType.Repository, current, target);

  const previousValues: ApiRepositoryMeta[] = Reflect.getMetadata(
    DecoratorType.Repository,
    Reflect,
  ) || [];

  const metaArray = [current, ...previousValues];

  Reflect.defineMetadata(
    DecoratorType.Repository,
    metaArray,
    Reflect,
  );

}

// DECORATOR: CONTROLLER

export function Controller(prefix: string) {
  return function(target: DecoratorTarget): void {

    const current: ApiControllerMeta = {
      name: (target as { name: string }).name,
      prefix,
      target
    }

    decorate(injectable(), target);
    Reflect.defineMetadata(DecoratorType.Controller, current, target);

    const previousValues: ApiControllerMeta[] = Reflect.getMetadata(
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

function routeBinder(method: ApiMethodType) {

  return function(path: string) {
    return function(target: DecoratorTarget, key: string):void  {
  
      const metaData: ApiControllerMethodMeta = {
        key,
        method,
        path,
        target: target[key]
      };
  
      let metaList: ApiControllerMethodMeta[] = [];
  
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

export const Get = routeBinder(ApiMethodType.Get);
export const Post = routeBinder(ApiMethodType.Post);