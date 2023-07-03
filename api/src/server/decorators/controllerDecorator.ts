import 'reflect-metadata';

import {  NextFunction, Request, Response } from 'express';

import { ServerRouter } from '../classes';
import { VerbType, MetaType } from '../lib';
import { RequestHandler } from 'express';

// function bodyValidators(keys: string[]): RequestHandler {
//   return function(req: Request, res: Response, next: NextFunction) {
//     if(!req.body) {
//       res.status(422).send('invalid request');
//       return;
//     }
//     for (let key of keys) {
//       if (!req.body[key]) {
//         res.status(422).send(`Missing property: ${key}`);
//         return;
//       }
      
//     }
//     next();
//   }
// }

export function controller(routePrefix: string) {
  return function(target: Function) {

    const router = ServerRouter.getInstance();

    // Reflect.defineMetadata('routePrefix', routePrefix, target, key);

    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetaType.path,
        target.prototype,
        key
      );
      const method: VerbType = Reflect.getMetadata(
        MetaType.method,
        target.prototype,
        key
      );
      const middlewares = Reflect.getMetadata(
        MetaType.middleware,
        target.prototype,
        key
      ) || [];
      // const requiredBodyProps = Reflect.getMetadata(
      //   MetaType.validator,
      //   target.prototype,
      //   key
      // ) || [];

      // const validator = bodyValidators(requiredBodyProps);

      if(path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }

    });
  }
}