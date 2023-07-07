// import {
//   SystemMeta,
//   DecoratorHandlerInterface,
//   DecoratorTargetInterface,
//   ApiMiddleware,
//   ApiHttpType,
//   MetaType,
// } from '@/workshop/lib';

// const meta:string = SystemMeta.Decorator.Api;

// // DECORATOR: CONTROLLER

// export function Controller(path: string, ...middleware: ApiMiddleware[]) {
//   return function(target: NewableFunction): void {

//     const currentMetadata: MetaCtrlInterface = {
//       middleware,
//       path,
//       target,
//     };

//     // decorate(injectable(), target);
//     // Reflect.defineMetadata(MetaType.Controller, currentMetadata, target);

//     // const previousMetadata: MetaCtrlInterface[] = Reflect.getMetadata(
//     //   META_TYPE.Controller,
//     //   Reflect,
//     // ) || [];

//     // const metaArray = [currentMetadata, ...previousMetadata];

//     // Reflect.defineMetadata(
//     //   META_TYPE.Controller,
//     //   metaArray,
//     //   Reflect,
//     // );

//     // const router = ServerRouter.getInstance();

//     // Reflect.defineMetadata('routePrefix', routePrefix, target, key);

//     // Object.getOwnPropertyNames(target.prototype).forEach((key) => {
//     //   const routeHandler = target.prototype[key];

//     //   const path = Reflect.getMetadata(
//     //     META_TYPE.Path,
//     //     target.prototype,
//     //     key
//     //   );
//     //   const method: HttpType = Reflect.getMetadata(
//     //     META_TYPE.ControllerMethod,
//     //     target.prototype,
//     //     key
//     //   );
//       // const middlewares = Reflect.getMetadata(
//       //   META_TYPE.middleware,
//       //   target.prototype,
//       //   key
//       // ) || [];
//       // const requiredBodyProps = Reflect.getMetadata(
//       //   META_TYPE.validator,
//       //   target.prototype,
//       //   key
//       // ) || [];

//       // const validator = bodyValidators(requiredBodyProps);

//       // if(path) {
//       //   router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
//       // }

//     // });
//   }
// }


// // DECORATOR: ROUTE

// function routeMethod(
//   method: ApiHttpType,
//   path: string,
//   ...middleware: ApiMiddleware[]
// ): DecoratorHandlerInterface {
//   return function(target: DecoratorTargetInterface, key: string): void {

//     console.log(`${meta}`, method, path, middleware, target[key], key);

//     // const metaData: MetaCtrlMethodInterface = {
//     //   key,
//     //   method,
//     //   middleware,
//     //   path,
//     //   target
//     // };

//     // let metaList: MetaCtrlMethodInterface[] = [];

//     // const hasMeta = Reflect.hasOwnMetadata(
//     //   MetaType.ControllerMethod,
//     //   target.constructor
//     // );
    
//     // if(!hasMeta) {
//     //   Reflect.defineMetadata(
//     //     MetaType.ControllerMethod,
//     //     metaList,
//     //     target.constructor
//     //   );
//     // } else {
//     //   metaList = Reflect.getOwnMetadata(
//     //     MetaType.ControllerMethod,
//     //     target.constructor,
//     //   ) as Array<MetaCtrlMethodInterface>;
//     // }

//     // metaList.push(metaData);

//     // console.log('META LIST FROM ROUTE DECO', metaList);
//   }
// }

// export function Get(
//   path: string,
//   ...middleware: ApiMiddleware[]
// ): DecoratorHandlerInterface {
//   return routeMethod(ApiHttpType.Get, path);
// }

// // export const Put = routeMethod(HTTP_TYPE.Put);
// // export const Post = routeMethod(HTTP_TYPE.Post);
// // export const Delete = routeMethod(HTTP_TYPE.Delete);
// // export const Patch = routeMethod(HTTP_TYPE.Patch);