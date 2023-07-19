import express, {
  Application,
  RequestHandler,
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

import { ApiModuleInterface } from './api.schema';

export class ApiModule implements ApiModuleInterface {
  private _app: Application;
  private _router: Router;

  constructor(){
    this._app = express();
    this._router = Router();
  }

  // PUBLIC METHODS

  public reporter(): void {

  }
  
  public start(): void {
    this._registerRouter();
    this._app.listen(4000, () => {
      // this._meta.report();
      console.log(`Api Started!`);
      // console.log(`${meta}: URL: ${this._meta.url}`);
    })
  }

  // PRIVATE METHODS

  // private _builder() {

  //   this._applyMiddleware(this._opts.middleware);
  //   this._registerRouter();
  // }

  // private _applyMiddleware(middlewares: ApiMiddleware[]): this {
  //   middlewares.forEach((m) => {
  //     this._app.use(m);
  //   });
  //   return this;
  // }

  // ROUTES

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

    this._router['get'](
      '', 
      [], 
      (req: Request, res: Response) => res.send({message: 'hello world'})
    )

    this._app.use('/', this._router);

  }

};