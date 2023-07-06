import 'reflect-metadata';


import { injectable, decorate } from 'inversify';

import { META_TYPE } from '@/workshop/lib/constants';
import { MetaCtrlInterface, Middleware, } from '@/workshop/lib/interfaces';

export function Controller(path: string, ...middleware: Middleware[]) {
  return function(target: NewableFunction): void {

    const currentMetadata: MetaCtrlInterface = {
      middleware,
      path,
      target,
    };

    decorate(injectable(), target);
    Reflect.defineMetadata(META_TYPE.Controller, currentMetadata, target);

    const previousMetadata: MetaCtrlInterface[] = Reflect.getMetadata(
      META_TYPE.Controller,
      Reflect,
    ) || [];

    const metaArray = [currentMetadata, ...previousMetadata];

    Reflect.defineMetadata(
      META_TYPE.Controller,
      metaArray,
      Reflect,
    );

    // const router = ServerRouter.getInstance();

    // Reflect.defineMetadata('routePrefix', routePrefix, target, key);

    // Object.getOwnPropertyNames(target.prototype).forEach((key) => {
    //   const routeHandler = target.prototype[key];

    //   const path = Reflect.getMetadata(
    //     META_TYPE.Path,
    //     target.prototype,
    //     key
    //   );
    //   const method: HttpType = Reflect.getMetadata(
    //     META_TYPE.ControllerMethod,
    //     target.prototype,
    //     key
    //   );
      // const middlewares = Reflect.getMetadata(
      //   META_TYPE.middleware,
      //   target.prototype,
      //   key
      // ) || [];
      // const requiredBodyProps = Reflect.getMetadata(
      //   META_TYPE.validator,
      //   target.prototype,
      //   key
      // ) || [];

      // const validator = bodyValidators(requiredBodyProps);

      // if(path) {
      //   router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      // }

    // });
  }
}