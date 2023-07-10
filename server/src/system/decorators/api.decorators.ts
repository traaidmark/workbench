import { injectable, decorate } from 'inversify';

import {
  DecoratorType,
  ApiMethodType,
 } from '@/system/lib';



// DECORATOR: CONTROLLER

export function Controller(prefix: string) {
  return function(target: Function) {

    const current = {
      prefix,
      target
    }

    decorate(injectable(), target);
    Reflect.defineMetadata(DecoratorType.Controller, current, target);

    const previousValues = Reflect.getMetadata(
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
    return function(target: any, key: string) { 
  
      const metaData = {
        method,
        path,
        target: target[key]
      };
  
      let metaList = [];
  
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