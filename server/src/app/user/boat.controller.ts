import { Request, Response, RequestHandler } from 'express';

import {
  ProviderType,
  Provider,
  Called,
  Controller,
  Get,
  AddService,
} from '@/core';

import {
  CONFIG,
  IUserController,
  IUserService
} from '@/app/user';

@Provider(ProviderType.ApiController)
@Controller(CONFIG.routes.prefix)
export class UserController implements IUserController {

  @AddService @Called(CONFIG.names.Service) private _service: IUserService;

  @Get('/random')
  getRandom = (req: Request, res: Response): void => {
    res.status(200).send(this._service.getRandom())
  }

}

