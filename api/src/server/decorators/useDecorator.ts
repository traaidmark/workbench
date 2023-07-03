import 'reflect-metadata';

import { MetaType } from '../lib';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function(target: any, key: string, desc: PropertyDescriptor) {

    const middlewares = Reflect.getMetadata(MetaType.middleware, target, key) || [];

    Reflect.defineMetadata(MetaType.middleware, [...middlewares, middleware], target, key);
    
  }
}

// export const get = routeBinder(Methods.get);
// export const put = routeBinder(Methods.put);
// export const post = routeBinder(Methods.post);
// export const del = routeBinder(Methods.delete);
// export const patch = routeBinder(Methods.patch);