import { Request, Response, RequestHandler } from 'express';

import {
  ProviderType,
  Provider,
  Called,
  Controller,
  Get,
  AddService,
} from '@/core';

import { ApiBaseController } from '@/core/services/api/classes/api.controller.class';

import {
  CONFIG,
  IUserController,
  IUserService
} from '@/app/modules/user';

@Provider(ProviderType.ApiController)
@Controller(CONFIG.routes.prefix)
export class UserController {

  @AddService @Called(CONFIG.names.Service) private _service: IUserService;

  @Get('/')
  getRandom = (req: Request, res: Response): void => {
    // this.send(this._service.getRandom());
    res.send(this._service.getRandom());
  }

}

