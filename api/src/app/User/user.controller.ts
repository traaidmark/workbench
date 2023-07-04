import {  Request, Response } from 'express';

export class UserController {

  // GET: ALL
  getAll(req: Request, res: Response): void {
    res.status(200).send({
      message: "this is awesome!"
    })
  };
}