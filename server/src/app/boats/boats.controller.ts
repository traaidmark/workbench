import { Request, Response, } from 'express';
import { Controller, Get } from '@/system/decorators';

@Controller('/boats')
export class BoatsController {

  @Get('/1')
  findOne(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am a single boat'
    })
  }
  @Get('/')
  getAll(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am all boats!!'
    })
  }

}