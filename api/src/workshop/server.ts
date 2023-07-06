import express, { Application, RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { METADATA_KEY, interfaces } from 'inversify';
import { controllerUtil, routeUtil } from '@/workshop/utils';

import {
  defaultServerOptions,
  defaultServerRoot,
} from '@/workshop/lib/config';
import {
  MetaCtrlMethodInterface,
  ServerConfigInterface,
  HttpContextInterface,
  ControllerInterface,
  ControllerHandlerInterface
  
} from '@/workshop/lib/interfaces';
import { META_TYPE, CONTAINER_TYPE } from './lib/constants';


export class Server {
  private _container: interfaces.Container;
  private _app: Application;
  private _opts: ServerConfigInterface;
  private _router: Router;


  constructor(
    container: interfaces.Container,
    options?: ServerConfigInterface | null,
  ){
    this._container = container;
    this._opts = {...defaultServerOptions, ...options};
    
    this._app = express();
    this._router = Router();
    

    // this.applyMiddleware();
  }

  // private applyMiddleware() {
  //   if(this.options.middleware && this.options.middleware.length > 0) {
  //     for(let k of this.options.middleware) {
  //       this.app.use(k);
  //     }
  //   }
  // }

  // REGISTER ROUTER
 
  private registerRouter() {

    const controllers = controllerUtil.getAllFromContainer(
      this._container, 
      false
    );

    controllers.forEach((controller: ControllerInterface) => {
      const ctlMeta = controllerUtil.getMetaData(controller.constructor);
      const routeMeta = routeUtil.getMetaData(controller.constructor);

      routeMeta.forEach((metadata: MetaCtrlMethodInterface) => {

        // TODO: HANDLE PARAMS
        // TODO: HANDLE MIDDLEWARE

        this._router[metadata.method](
          `${ctlMeta.path}${metadata.path}`,
          // ...controllerMiddleware,
          // ...routeMiddleware,
          metadata.target[metadata.key]
        );

      });

    })

    this._app.use(defaultServerRoot, this._router);

  }


  // ARGUMENTS

  // HTTP CONTEXT

  private _getHttpContext(req: express.Request): HttpContextInterface {
    return Reflect.getMetadata(
      META_TYPE.HttpContext,
      req,
    ) as HttpContextInterface;
  }

  private async _createHttpContext(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<HttpContextInterface> {
    // const principal = await this._getCurrentUser(req, res, next);
    return {
      // We use a childContainer for each request so we can be
      // sure that the binding is unique for each HTTP request
      container: this._container.createChild(),
      request: req,
      response: res,
      // user: principal
    };
  }

  // BUILD

  public build(): express.Application {
    console.log('I AM THE BUILDER');

    // CREATE CONTEXT

    this._app.all('*', (
      req: Request,
      res: Response,
      next: NextFunction,
    ) => {
      void (async (): Promise<void> => {
        const httpContext = await this._createHttpContext(req, res, next);
        Reflect.defineMetadata(
          META_TYPE.HttpContext,
          httpContext,
          req,
        );
        next();
      })();
    });

    this.registerRouter();
    return this._app;
  }

  // LISTEN
 
  // public listen(): void {
    
  // }

}