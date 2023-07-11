import { Request, Response, } from 'express';
import { inject, named  } from 'inversify';

import { Provider, Controller, Get } from '@/system/decorators';
import { Type } from '@/system/lib';

import { BoatsControllerInterface, BoatsRepositoryInterface } from './boats.schema';

@Provider(Type.Provider.Controller)
@Controller('/boats')
export class BoatsController implements BoatsControllerInterface {

  private _repository: BoatsRepositoryInterface;

  constructor(
    @inject(Type.Provider.Repository) 
    @named('BoatsRepository') 
    repo: BoatsRepositoryInterface
  ) {
    this._repository = repo;
  }

  @Get('/1')
  findOne(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am a single Boat'
    })
  }
  
  @Get('/')
  getAll(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am all Boats'
    })
  }

}