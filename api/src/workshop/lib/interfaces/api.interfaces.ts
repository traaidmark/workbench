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

export type ApiControllerHandler = (...params: Array<unknown>) => unknown;
export type ApiController = Record<string, ApiControllerHandler>;

export interface ApiBaseMeta {
  path: string;
  middleware?: Array<ApiMiddleware>;
  target: DecoratorTarget;
}

export interface ApiControllerMeta extends ApiBaseMeta {}

export interface ApiControllerMethodMeta extends ApiBaseMeta {
  key: string;
  method: ApiHttpType;
}