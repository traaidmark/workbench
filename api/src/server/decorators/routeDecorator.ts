import 'reflect-metadata';

import { VerbType, MetaType, RouteHandlerDescriptor } from '../lib';


function routeBinder(method: string) {

  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetaType.path, path, target, key);
      Reflect.defineMetadata(MetaType.method, method, target, key);
    }
  }
}

export const get = routeBinder(VerbType.get);
export const put = routeBinder(VerbType.put);
export const post = routeBinder(VerbType.post);
export const del = routeBinder(VerbType.delete);
export const patch = routeBinder(VerbType.patch);