import { Request, Response } from 'express';
import { Get, Route } from '../../server';

import {UserController} from './user.controller';

const controller = new UserController();

@Route('')
export class RootRoute {

  @Get('/')
  getAll(req: Request, res: Response): void {
    // res.status(200).send({
    //   message: "Is this working?"
    // })
    controller.getAll(req, res);
  }
}