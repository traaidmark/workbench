import { Request, Response } from 'express';

import { Called } from '@/core/services/provider';
import {
  CreateController,
  Controller,
  ApiResponse,
  Get,
  Post,
  InjectService,
} from '@/core/services/api';

import { ROUTE, SERVICE_NAME } from './user.constants';
import { UserControllerInterface, UserServiceInterface } from './user.schema';

@CreateController
@Controller(ROUTE.prefix)
export class UserController implements UserControllerInterface {

  @InjectService @Called(SERVICE_NAME) private _service: UserServiceInterface;

  // [GET]: Get all users
  @Get(ROUTE.root)
  public fetchAll = (req: Request, res: Response) => {
    res.send(this._service.fetchAll());
  }

}

