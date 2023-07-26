import express, {
  Application,
  Router,
} from 'express';

import { AppTransportInterface } from '@/app/lib';

// import {
//   TransportInterface,
// } from '@/bench/core/lib';

// import { TransportProvider } from '@/bench/core';

class ApiTransport implements AppTransportInterface {
  private _app: Application;
  private _router: Router;

  constructor(
  ) {
    this._app = express();
    this._router = Router();
  }

  // PUBLIC METHODS

  public init = (controllers: []): this => {
    console.log('INITTING TRANSPORT!')
    this._registerRouter();
    return this;
  }

  public start = (): void => {
    this._app.listen(4000, () => {
      console.log(`API Server started on port: 4000`);
    })
  }

  // PRIVATE METHODS

  private _registerRouter = () => {

    // const controllers = this._provider.getProviders(ProviderType.ApiController);

    // controllers.forEach(c => {

    //   const controller: ApiControllerMeta = this._util.fetch(c.constructor);

    //   this._meta.add(controller);

    //   controller.endpoints.forEach((endpoint) => {

    //     // const handler: RequestHandler = this._handlerFactory(
    //     //   controller.key,
    //     //   endpoint.key
    //     // );
    //     const handler: RequestHandler = c[endpoint.key];
    //     const path: string = `${controller.path}${endpoint.path}`;
        
    //     this._router[endpoint.method](path, [], handler)
    //   })

    // });

    this._router['get']('/', [], (req, res) => res.send({message: 'hello world!'}))

    this._app.use('/', this._router);

  }
}

export default ApiTransport;