import express, { Application, RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { interfaces } from 'inversify';

import {
  DecoratorType,
  ContainerType,
  ApiControllerMeta,
  ApiControllerMethodMeta,
  ApiController,
  ApiControllerHandler,
  ApiHttpContext
} from './lib';

import { controllerUtils } from './utils';

const meta:string = '[SERVER]';

export class Server {
  private _container: interfaces.Container;
  private _app: Application;
  private _router: Router;

  constructor(
    container: interfaces.Container,
  ){
    this._container = container;
    
    this._app = express();
    this._router = Router();
    

    // this.applyMiddleware();
  }

  // PUBLIC METHODS

  public build(): this {
    this._registerRouter();
    return this;
  }
  
  public start() {
    this._app.listen(4000, () => {
      console.log(`${meta}: Listening on port ${4000}`);
    })
  }


  // PRIVATE METHODS

  private _registerRouter() {

    // FAKE HTTP CONTEXT?!
    this._container
      .bind<ApiHttpContext>(ContainerType.HttpContext)
      .toConstantValue({} as ApiHttpContext);

    const controllers = this._container.getAll(ContainerType.Controller);

    controllers.forEach(c => {
      
      const app: ApiControllerMeta = controllerUtils.fetch(c.constructor);

      // console.log(`${meta}: Method Meta`, app);

      app.methods.forEach((m) => {

        // const handler:express.RequestHandler = this._handlerFactory(app.name, m.key)
        const handler:express.RequestHandler = c[m.key];

        this._router[m.method](
          `${app.prefix}${m.path}`, 
          [], 
          handler
        );
      });

    });

    this._app.use('/', this._router);

  }
};