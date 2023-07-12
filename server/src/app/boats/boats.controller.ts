import { Request, Response, RequestHandler } from 'express';

import {
  AppProviderType,
  AppProvider,
  Name,
  Repository,
  Base
} from '@/core/app';

import {
  BoatsControllerInterface,
  BoatsRepositoryInterface
} from './boats.schema';

import { LoggerInterface } from '@/core/providers';

@AppProvider(AppProviderType.Controller)
export class BoatsController implements BoatsControllerInterface {

  private _repo: BoatsRepositoryInterface;
  private _logger: LoggerInterface;

  constructor(
    @Repository @Name('BoatsRepository') repo: BoatsRepositoryInterface,
    @Base @Name('LoggerProvider') logger: LoggerInterface

  ) {
    this._repo = repo;
    this._logger = logger;
  }


  // findOne(req: Request, res: Response): void {
  //   res.status(200).send({
  //     'message': 'I am a single Boat'
  //   })
  // }
  

  // getAll(req: Request, res: Response): void {
  //   res.status(200).send({
  //     'message': 'I am all Boats'
  //   })
  // }
  public findOne = () => {
    return {
      'message': 'I am a single Boat'
    }
  }
  

  public getAll = () => {
    this._logger.happy();
    return this._repo.getAll();
  }

}

