import express, { Application, RequestHandler, Router, Request, Response, NextFunction } from 'express';
import { interfaces } from 'inversify';

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

  public build() {
    
  }
  
  public start() {
    this._app.listen(4000, () => {
      console.log(`App listening on the port ${4000}`);
    })
  }


  // PRIVATE METHODS

};