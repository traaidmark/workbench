import { Request, Response, RequestHandler } from 'express';

import {
  ProviderType,
  Provider,
  Called,
  Controller,
  Get,
  AddService
} from '@/core';

import {
  PATHS,
  Boats,
  BoatsControllerInterface,
  BoatsServiceInterface
} from '@/app/boats';

@Provider(ProviderType.ApiController)
@Controller(PATHS.ROUTER)
export class BoatsController implements BoatsControllerInterface {

  @AddService @Called(Boats.Service) _service: BoatsServiceInterface;

  @Get('/1')
  findOne = (req: Request, res: Response): void => {
    res.status(200).send(this._service.findOne())
  }
  
  @Get('/')
  getAll = (req: Request, res: Response): void => {
    res.status(200).send(this._service.getAll())
  }


}

