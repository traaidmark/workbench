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

export const Get = routeBinder(VerbType.Get);
export const Put = routeBinder(VerbType.Put);
export const Post = routeBinder(VerbType.Post);
export const Delete = routeBinder(VerbType.Delete);
export const Patch = routeBinder(VerbType.Patch);