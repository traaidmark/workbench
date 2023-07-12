import express, {
  Application,
  RequestHandler,
  Router,
  Request,
  Response,
  NextFunction
} from 'express';

const meta:string = '[SERVER]';

export class ApiServer {
  // private _container: Int.Container;
  private _app: Application;
  private _router: Router;

  constructor(
    // container: Int.Container,
  ){
    // this._container = container;
    
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
    // this._container
    //   .bind<Int.ApiHttpContext>(Type.Provider.HttpContext)
    //   .toConstantValue({} as Int.ApiHttpContext);

    // const controllers = this._container.getAll(Type.Provider.Controller);

    // controllers.forEach(c => {
      
    //   const app: Int.ApiControllerMeta = controllerUtils.fetch(c.constructor);

    //   // console.log(`${meta}: Method Meta`, app);

    //   app.methods.forEach((m) => {
        
    //     const handler:express.RequestHandler = c[m.key];

    //     this._router[m.method](
    //       `${app.prefix}${m.path}`, 
    //       [], 
    //       handler
    //     );
    //   });

    // });

    this._router['get'](
      `/`, 
      [], 
      (req, res) => res.send({message: 'hello this is basic server'})
    );

    this._app.use('/', this._router);

  }
};