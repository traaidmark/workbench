import express, { Application, RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { interfaces } from 'inversify';

import {
  containerUtil,
  decoratorUtil
} from '@/workshop/utils';
import {
  SystemMeta,
  ProviderType,
  MetaType,
  DecoratorTarget,
  ApiController
} from '@/workshop/lib';

const meta:string = SystemMeta.Server;

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

    const controllers = containerUtil.fetchType(
      this._container, 
      ProviderType.Controller,
    );

    controllers.forEach((controller: ApiController) => {

      // const { name } = controller.constructor as { name: string };

      console.log(`${meta}: Controller Caught`, controller);

      // TODO: GET CONTROLLER META DATA
      // const controllerTestMeta = decoratorUtil.getAll(
      //   MetaType.Controller
      // );
      // console.log(`${meta}: Controller Test Meta: `, controllerTestMeta);
      
      const controllerMeta = decoratorUtil.getFor(
        MetaType.Controller, 
        controller.constructor
      );
      console.log(`${meta}: Controller Meta: `, controllerMeta);
      

      // TODO: GET METHOD META DATA

      
      // const ctlMeta = controllerUtil.getMetaData(controller.constructor);
      // const routeMeta = routeUtil.getMetaData(controller.constructor);

      // routeMeta.forEach((metadata: MetaCtrlMethodInterface) => {

      //   // TODO: HANDLE PARAMS
      //   // TODO: HANDLE MIDDLEWARE

      //   this._router[metadata.method](
      //     `${ctlMeta.path}${metadata.path}`,
      //     // ...controllerMiddleware,
      //     // ...routeMiddleware,
      //     metadata.target[metadata.key]
      //   );

      // });

    })

    // this._app.use(defaultServerRoot, this._router);

  }

};