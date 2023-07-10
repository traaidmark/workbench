import { Request, Response, } from 'express';
import { Controller, Get } from '@/system/decorators';

@Controller('/users')
export class UsersController {

  @Get('/adrian')
  findOne(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am a single user'
    })
  }
  @Get('/')
  getAll(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am all users'
    })
  }

}