import express, { Application, RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { interfaces } from 'inversify';

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

    this._router['get'](`/`, [], (req, res) => res.send({'message': 'hello'}));

    this._app.use('/', this._router);

  }

};