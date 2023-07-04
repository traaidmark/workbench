import 'reflect-metadata';

import { MetaType } from '../lib';
import { RequestHandler } from 'express';

export function Use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {

    const middlewares = Reflect.getMetadata(MetaType.middleware, target, key) || [];

    Reflect.defineMetadata(MetaType.middleware, [...middlewares, middleware], target, key);
    
  }
}