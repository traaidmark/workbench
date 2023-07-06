import { Request, Response  } from 'express';

import { Controller, Get } from '@/workshop/decorators';

@Controller('/users')
export class UserController {

  @Get('/')
  getUser(req: Request, res: Response) {
    res.status(200).send({'message': 'I AM USER'});
  }

}