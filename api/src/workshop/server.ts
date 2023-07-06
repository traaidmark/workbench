import express, { Application, RequestHandler, Router } from 'express';
import { interfaces } from 'inversify';
import { controllerUtil, routeUtil } from '@/workshop/utils';

import { 
  META_TYPE,
  MetaCtrlMethodInterface,
  ServerConfigInterface, 
  defaultServerOptions,
  defaultServerRoot,
} from '@/workshop/lib';
import { Controller } from './lib/abstractions';


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
    this.applyRouter();
  }

  // private applyMiddleware() {
  //   if(this.options.middleware && this.options.middleware.length > 0) {
  //     for(let k of this.options.middleware) {
  //       this.app.use(k);
  //     }
  //   }
  // }
 
  private applyRouter() {

    const controllers = controllerUtil.getAllFromContainer(
      this._container, 
      false
    );

    controllers.forEach((controller: Controller) => {
      console.log('CONTROLLER', controller);
      const ctlMeta = controllerUtil.getMetaData(controller.constructor);
      const routeMeta = routeUtil.getMetaData(controller.constructor);

      console.log('objects:', {
        controller,
        ctlMeta,
        routeMeta
      })

      // Object.getOwnPropertyNames(controller.target.prototype).forEach((key) => {
        
      // }

      routeMeta.forEach((metadata: MetaCtrlMethodInterface) => {

        // TODO: HANDLE PARAMS
        // TODO: HANDLE MIDDLEWARE

        // TODO: HANDLE HANDLER
        // const handler: RequestHandler = ;

        console.log('METADATA', metadata.target);

        this._router[metadata.method](
          `${ctlMeta.path}${metadata.path}`,
          // ...controllerMiddleware,
          // ...routeMiddleware,
          // (req, res) => {
          //   res.send({'message': 'I am starting up?!?!'});
          // },
          metadata.target[metadata.key]
        );

      });

    })

    this._app.use(defaultServerRoot, this._router);

  }

  // LISTEN
 
  public listen(): void {
    this._app.listen(this._opts.port, () => {
      console.log(`App listening on the port ${this._opts.port}`);
    });
  }

}