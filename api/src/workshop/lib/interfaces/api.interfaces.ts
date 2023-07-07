import { RequestHandler } from 'express';

import {
  ApiHttpType,
  DecoratorTarget,
  ProviderType,
} from '@/workshop/lib';

export interface ApiInterface<T> {
  default(): ApiResponse<T>;
}

export interface ApiResponse<T> {
  data?: T,
  message: string;
  errors?: string[];
}

export type ApiMiddleware = (string | symbol | RequestHandler);

export interface ApiController {
  path: string;
  middleware: Array<ApiMiddleware>;
}

export interface ApiBaseMeta {
  path: string;
  middleware?: Array<ApiMiddleware>;
  target: DecoratorTarget;
}

export interface ApiControllerMeta extends ApiBaseMeta {
  type: ProviderType;
}

export interface ApiControllerMethodMeta extends ApiControllerMeta {
  key: string;
  method: ApiHttpType;
}