import { Request, Response, } from 'express';
import { Provider, Controller, Get } from '@/system/decorators';
import { Type } from '@/system/lib';

@Provider(Type.Provider.Controller)
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