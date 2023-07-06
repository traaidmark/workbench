import { inject, injectable } from 'inversify';
import { Request, Response  } from 'express';

import { Controller, Get,  } from '@/workshop/decorators';


@Controller('')
export class RootController {

  @Get('/')
  rootResponse(req: Request, res: Response) {
    res.status(200).send({'message': 'I AM ROOT'});
  }

}