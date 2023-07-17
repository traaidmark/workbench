import { RequestHandler, Request, Response, NextFunction} from 'express';
import { ProviderContainerInterface } from '../provider';
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

export enum ApiParamType {
  REQUEST,
  RESPONSE,
  PARAMS,
  QUERY,
  BODY,
  HEADERS,
  COOKIES,
  NEXT,
  PRINCIPAL
}

// SCHEMA: HTTP

export interface ApiHttpContext<T = unknown> {
  container: ProviderContainerInterface;
  request: Request;
  response: Response;
  // user: Principal<T>;
}


// SCHEMA: SERVICE INTERFACES

export type ApiControllerHandler = (...params: Array<unknown>) => unknown;
export type IApiController = Record<string, ApiControllerHandler>;


// SCHEMA: INTERFACES

export interface IApiService {
  start(): void;
}

export interface IApiMeta {
  report(): void;
  add(c: ApiController): void;
}

export interface ApiOptions {
  port?: number;
  route?: string;
  url?: string;
  middleware?: ApiMiddleware[];
}

export interface ApiUtilityInterface {
}

export type ApiMiddleware = (string | symbol | RequestHandler);
export type ApiMiddlewares = {
  server: ApiMiddleware[],
};

// SCHEMA: METADATA


export interface ApiControllerMeta {
  path: string;
  middleware: ApiMiddleware[];
}
export interface ApiEndpointMeta extends ApiControllerMeta {
  method: ApiMethodType;
}

export interface ApiController {
  key: string;
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

// SCHEMA: CLASSES: CONTROLLER

export interface IApiBaseController {
  send()
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data: T
}