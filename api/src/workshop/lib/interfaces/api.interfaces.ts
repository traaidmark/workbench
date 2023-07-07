import { RequestHandler } from 'express';

import {ApiHttpType, DecoratorTargetInterface} from '@/workshop/lib';

export interface ApiInterface<T> {
  default(): ApiResponse<T>;
}
export interface ApiResponse<T> {
  data?: T,
  message: string;
  errors?: string[];
}

export type ApiMiddleware = (string | symbol | RequestHandler);

export interface ApiRouteMetaInterface {
  middleware: Array<ApiMiddleware>;
  path: string;
  target: DecoratorTargetInterface;
}

export interface ApiMethodMetaInterface extends ApiRouteMetaInterface {
  key: string;
  method: ApiHttpType;
}