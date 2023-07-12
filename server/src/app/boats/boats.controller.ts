import { Request, Response, } from 'express';
import { inject, named  } from 'inversify';

import { BoatsControllerInterface, BoatsRepositoryInterface } from './boats.schema';

export class BoatsController implements BoatsControllerInterface {

  // private _repository: BoatsRepositoryInterface;

  // constructor(
  //   @inject(Type.Provider.Repository) 
  //   @named('BoatsRepository') 
  //   repo: BoatsRepositoryInterface
  // ) {
  //   this._repository = repo;
  // }


  findOne(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am a single Boat'
    })
  }
  

  getAll(req: Request, res: Response) {
    res.status(200).send({
      'message': 'I am all Boats'
    })
  }

}

