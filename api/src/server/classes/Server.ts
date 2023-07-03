import express, { Application, Router } from 'express';
import { ServerRouter } from './ServerRouter';
import { ConfigInterface } from '../lib';

export class Server {
  public app: Application;
  public router: Router;
  public options: ConfigInterface;

  constructor(options: ConfigInterface){
    this.app = express();
    this.router = ServerRouter.getInstance();
    this.options = options;

    this.applyMiddleware();
    this.applyRouter();
  }

  private applyMiddleware() {
    if(this.options.middleware && this.options.middleware.length > 0) {
      for(let k of this.options.middleware) {
        this.app.use(k);
      }
    }
  }
 
  private applyRouter() {
    this.app.use(this.router);
  }
 
  public listen() {
    this.app.listen(this.options.port, () => {
      console.log(`App listening on the port ${this.options.port}`);
    });
  }

}