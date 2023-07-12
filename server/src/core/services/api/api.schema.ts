import { RequestHandler } from 'express';
import { DecoratorMeta } from '@/core/lib/schema';

// SCHEMA: TYPES

export enum ApiMethodType {
  Get = 'get',
  Put = 'put',
  Post = 'post',
  Delete = 'delete',
  Patch = 'patch',
}

// SCHEMA: INTERFACES

export interface ApiServiceInterface {
  build(): this;
  start(): void;
}

export interface ApiUtilityInterface {
}

export type ApiMiddleware = (string | symbol | RequestHandler);


export interface ApiControllerMeta {
  path: string;
  middleware: ApiMiddleware[];
}
export interface ApiEndpointMeta extends ApiControllerMeta {
  method: ApiMethodType;
}

export interface ApiController {
  path: string;
  middleware: ApiMiddleware[];
  endpoints: ApiEndpoint[];
}

export interface ApiEndpoint {
  key: string;
  method: ApiMethodType;
  path: string;
  middleware: ApiMiddleware[];
}
