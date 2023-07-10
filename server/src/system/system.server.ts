import express, { Application, RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { interfaces } from 'inversify';

import { DecoratorType, ContainerType } from './lib';

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

    console.log(`${meta}: Register routes`);

    const controllers = this._container.getAll(ContainerType.Controller);

    controllers.forEach(controller => {
      console.log(`${meta}: Registered Controllers`, controller);

      // GET CONTROLLER META

      const ctrlMeta = Reflect.getOwnMetadata(
        DecoratorType.Controller,
        controller.constructor,
      )

      console.log(`${meta}: Controller Meta`, ctrlMeta);

      const methodMeta = Reflect.getOwnMetadata(
        DecoratorType.ControllerMethod,
        controller.constructor,
      )

      console.log(`${meta}: Method Meta`, methodMeta);

      // BUILD ROUTER

      // this._router['get'](`${ctrlMeta.path}${}`, [], (req, res) => res.send({'message': 'hello'}));

    });

    this._router['get'](`/`, [], (req, res) => res.send({'message': 'hello'}));

    this._app.use('/', this._router);

  }

};