import express, {
  Application,
  RequestHandler,
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

import { ProviderService, ProviderServiceInterface, ProviderType } from '@/core/services/provider';

import { ApiServiceInterface, ApiController, ApiUtility } from '@/core/services/api';

const meta:string = '[API SERVICE]';

export class ApiService implements ApiServiceInterface {
  private _provider: ProviderServiceInterface;
  private _app: Application;
  private _router: Router;
  private _util: ApiUtility;

  constructor(
    provider: ProviderServiceInterface
  ){
    this._provider = provider;
    
    this._app = express();
    this._router = Router();
    this._util = new ApiUtility();
    
    // this.applyMiddleware();
  }

  // PUBLIC METHODS

  public build(): this {
    this._registerRouter();
    return this;
  }
  
  public start(): void {
    this._app.listen(4000, () => {
      console.log(`${meta}: Listening on port ${4000}`);
    })
  }


  // PRIVATE METHODS

  private _registerRouter = () => {

    const controllers = this._provider.getProviders(ProviderType.Controller);

    controllers.forEach(c => {

      const controller: ApiController = this._util.fetch(c.constructor);

      controller.endpoints.forEach((endpoint) => {
        const handler: RequestHandler = c[endpoint.key];
        
        this._router[endpoint.method](
          `${controller.path}${endpoint.path}`, 
          [], 
          handler
        );

      })

    });

    this._app.use('/', this._router);

  }
};