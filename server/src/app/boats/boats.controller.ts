import { Request, Response, } from 'express';
import { inject, named  } from 'inversify';

import { Controller, Get } from '@/system/decorators';
import { ContainerType  } from '@/system/lib';

import { BoatsControllerInterface, BoatsRepositoryInterface } from './boats.schema';

@Controller('/boats')
export class BoatsController implements BoatsControllerInterface {

  private _repository: BoatsRepositoryInterface;

  constructor(
    @inject(ContainerType.Repository) 
    @named('BoatsRepository') 
    repo: BoatsRepositoryInterface
  ) {
    this._repository = repo;
  }

  @Get('/1')
  public findOne = (req: Request, res: Response) => {
    const data = this._repository.findOne();
    res.status(200).send(data);
  }

  @Get('/')
  public getAll = (req: Request, res: Response) => {
    const data = this._repository.getAll();
    res.status(200).send(data);
  }

}