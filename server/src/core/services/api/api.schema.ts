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

export enum ApiStatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
  METHOD_NOT_ALLOWED = 405,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  INTERNAL_SERVER = 500,
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
