import express, {
  Application,
  RequestHandler,
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

import { Provider, ProviderServiceInterface, ProviderType } from '@/core/services/provider';

import {
  DEFAULT_OPTS,
  IApiService,
  ApiController,
  ApiUtility,
  ApiMiddleware,
  ApiOptions,
  IApiMeta,
  ApiHttpContext,
  ApiControllerHandler,
  ApiParameterMetadata,
  ApiExtractedParameters
} from '@/core/services/api';
import { ApiMeta } from './classes';
import { DecoratorType } from '@/core/lib/schema';

const meta:string = '[API SERVICE]';

export class ApiService implements IApiService {
  private _provider: ProviderServiceInterface;
  private _app: Application;
  private _router: Router;
  private _util: ApiUtility;
  private _opts: ApiOptions;
  private _meta: IApiMeta;

  constructor(
    provider: ProviderServiceInterface,
    options: ApiOptions,
  ){
    this._provider = provider;
    
    this._app = express();
    this._router = Router();
    this._util = new ApiUtility();

    this._opts = {...DEFAULT_OPTS, ...options};

    this._meta = new ApiMeta(
      `${this._opts.url}:${this._opts.port}${this._opts.route}`
    );

    // BUILD
    this._builder();
    
    // this.applyMiddleware();
  }

  // PUBLIC METHODS

  public reporter(): void {

  }
  
  public start(): void {
    this._app.listen(this._opts.port, () => {
      this._meta.report();
      // console.log(`${meta}: Api Started!`);
      // console.log(`${meta}: URL: ${this._meta.url}`);
    })
  }

  // PRIVATE METHODS

  private _builder() {

    this._applyMiddleware(this._opts.middleware);
    this._registerRouter();
  }

  private _applyMiddleware(middlewares: ApiMiddleware[]): this {
    middlewares.forEach((m) => {
      this._app.use(m);
    });
    return this;
  }

  // ROUTES

  private _registerRouter = () => {

    const controllers = this._provider.getProviders(ProviderType.ApiController);

    controllers.forEach(c => {

      const controller: ApiController = this._util.fetch(c.constructor);

      this._meta.add(controller);

      controller.endpoints.forEach((endpoint) => {

        // const handler: RequestHandler = this._handlerFactory(
        //   controller.key,
        //   endpoint.key
        // );
        const handler: RequestHandler = c[endpoint.key];
        const path: string = `${controller.path}${endpoint.path}`;
        
        this._router[endpoint.method](path, [], handler)
      })

    });

    this._app.use(this._opts.route, this._router);

  }

};