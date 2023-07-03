import {  NextFunction, Request, Response } from 'express';
import { get, post, controller, use } from '../../server';

// function requireAuth(req: Request, res: Response, next: NextFunction) {
//   if(req.session && req.session.isLoggedIn) {
//     next();
//     return;
//   }
//   res.status(403).send('Fokkof');
// }


// class Controller {
//   req: Request;
//   res: Response;
//   constructor(req: Request, res: Response) {
//     this.req = req;
//     this.res = res;
//   }
//   run() {
//     this.res.send({'jirre': 'wut'});
//   }
// }

@controller('')
export class RootController {

  @get('/')
  homepage(req: Request, res: Response): void {
    res.status(200).send({
      message: "hello my world!??!"
    })
  }
}