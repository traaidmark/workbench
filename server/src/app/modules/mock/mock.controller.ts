import { Request, Response } from 'express';

import { Called } from '@/core/services/provider';
import {
  CreateController,
  Controller,
  ApiResponse,
  Get,
  InjectService,
} from '@/core/services/api';

import {
  CONFIG,
  IMockController,
  IMockService
} from '@/app/modules/mock';

@CreateController
@Controller(CONFIG.routes.prefix)
export class MockController {

  @InjectService @Called(CONFIG.names.Service) private _service: IMockService;

  @Get('/')
  getRandom = async (req: Request, res: Response): Promise<Response> => {
    const data = await this._service.getRandom();
    const response = new ApiResponse(res, data).send();
    return response;
  };

}

