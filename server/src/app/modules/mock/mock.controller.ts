import { Request, Response, RequestHandler } from 'express';

import {
  ProviderType,
  Provider,
  Called,
  Controller,
  Get,
  AddService,
} from '@/core';

import { ApiResponse, ApiResponseBody } from '@/core/services/api';

import { ApiBaseController } from '@/core/services/api/classes/api.controller.class';

import {
  CONFIG,
  IMockController,
  IMockService
} from '@/app/modules/mock';

@Provider(ProviderType.ApiController)
@Controller(CONFIG.routes.prefix)
export class MockController {

  @AddService @Called(CONFIG.names.Service) private _service: IMockService;

  @Get('/')
  getRandom = async (req: Request, res: Response): Promise<Response> => {
    const data = await this._service.getRandom();
    const response = new ApiResponse(res, data).send();
    return response;
  };

}

