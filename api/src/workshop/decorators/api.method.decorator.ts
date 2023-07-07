import {
  SystemMeta,
  DecoratorHandler,
  DecoratorTarget,
  ApiHttpType,
  ApiMiddleware,
  ApiControllerMethodMeta,
  MetaType,
  
} from '@/workshop/lib';

const meta:string = SystemMeta.Decorator.ApiMethod;

export function ApiMethod(
  method: ApiHttpType,
  path: string,
  ...middleware: ApiMiddleware[]
): DecoratorHandler {
  return function(target: DecoratorTarget, key: string): void {

    const metaData: ApiControllerMethodMeta = {
      key,
      method,
      middleware,
      path,
      target: target[key]
    };

    let metaList: ApiControllerMethodMeta[] = [];

    const hasMeta = Reflect.hasOwnMetadata(
      MetaType.ControllerMethod,
      target.constructor
    );
    
    if(!hasMeta) {
      Reflect.defineMetadata(
        MetaType.ControllerMethod,
        metaList,
        target.constructor
      );
    } else {
      metaList = Reflect.getOwnMetadata(
        MetaType.ControllerMethod,
        target.constructor,
      );
    }

    metaList.push(metaData);

    // console.log(`${meta}`, metaList);
  }
}

export function Get(
  path: string,
  ...middleware: Array<ApiMiddleware>
): DecoratorHandler {
  return ApiMethod(ApiHttpType.Get, path);
}

// export const Put = routeMethod(HTTP_TYPE.Put);
// export const Post = routeMethod(HTTP_TYPE.Post);
// export const Delete = routeMethod(HTTP_TYPE.Delete);
// export const Patch = routeMethod(HTTP_TYPE.Patch);