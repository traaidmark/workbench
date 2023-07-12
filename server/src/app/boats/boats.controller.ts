import { Request, Response, RequestHandler } from 'express';

import {
  ProviderType,
  Provider,
  Name,
  AddRepo,
  AddBase,
  Controller,
  Get
} from '@/core/services';

import {
  BoatsControllerInterface,
  BoatsRepositoryInterface
} from './boats.schema';

import { LoggerInterface } from '@/core/providers';

@Provider(ProviderType.Controller)
@Controller('/boats')
export class BoatsController implements BoatsControllerInterface {

  private _repo: BoatsRepositoryInterface;
  private _logger: LoggerInterface;

  constructor(
    @AddRepo @Name('BoatsRepository') repo: BoatsRepositoryInterface,
    @AddBase @Name('LoggerProvider') logger: LoggerInterface

  ) {
    this._repo = repo;
    this._logger = logger;
  }

  @Get('/1')
  findOne = (req: Request, res: Response): void => {
    res.status(200).send({
      'message': 'I am a single Boat'
    })
  }
  
  @Get('/')
  getAll = (req: Request, res: Response): void => {
    res.status(200).send({
      'message': 'I am all Boats'
    })
  }


}

