import { HTTP_TYPE, META_TYPE } from '@/workshop/lib/constants';
import { 
  RouteHandlerDescriptor, 
  HandlerDecorator, 
  MetaCtrlMethodInterface,
  Middleware
} from '@/workshop/lib/interfaces';
import { DecoratorTarget } from 'inversify/lib/annotation/decorator_utils';

function routeMethod(
  method: HTTP_TYPE,
  path: string,
  ...middleware: Middleware[]
): HandlerDecorator {
  return function(target: DecoratorTarget, key: string): void {

    const metaData: MetaCtrlMethodInterface = {
      key,
      method,
      middleware,
      path,
      target
    };

    let metaList: MetaCtrlMethodInterface[] = [];

    const hasMeta = Reflect.hasOwnMetadata(
      META_TYPE.ControllerMethod,
      target.constructor
    );
    
    if(!hasMeta) {
      Reflect.defineMetadata(
        META_TYPE.ControllerMethod,
        metaList,
        target.constructor
      );
    } else {
      metaList = Reflect.getOwnMetadata(
        META_TYPE.ControllerMethod,
        target.constructor,
      ) as Array<MetaCtrlMethodInterface>;
    }

    metaList.push(metaData);

    // console.log('META LIST FROM ROUTE DECO', metaList);
  }
}

export function Get(
  path: string,
  // ...middleware: Array<Middleware>
): HandlerDecorator {
  return routeMethod(HTTP_TYPE.Get, path);
}

// export const Put = routeMethod(HTTP_TYPE.Put);
// export const Post = routeMethod(HTTP_TYPE.Post);
// export const Delete = routeMethod(HTTP_TYPE.Delete);
// export const Patch = routeMethod(HTTP_TYPE.Patch);