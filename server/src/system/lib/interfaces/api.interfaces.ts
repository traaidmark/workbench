
import { interfaces } from 'inversify';
import { Request, Response, NextFunction } from 'express';

import { ApiMethodType, DecoratorTarget } from '@/system/lib';

export type ApiControllerHandler = (...params: Array<unknown>) => unknown;
export type ApiController = Record<string, ApiControllerHandler>;


export interface ApiUser<T = unknown> {
  details: T;
  isAuthenticated(): Promise<boolean>;
  // Allows role-based auth
  isInRole(role: string): Promise<boolean>;
  // Allows content-based auth
  isResourceOwner(resourceId: unknown): Promise<boolean>;
}

export interface ApiHttpContext<T = unknown> {
  container: interfaces.Container;
  request: Request;
  response: Response;
  user: ApiUser<T>;
}

export interface ApiControllerMeta {
  name: string;
  prefix: string;
  target: DecoratorTarget;
  methods?: ApiControllerMethodMeta[];
}
export interface ApiControllerMethodMeta {
  key: string;
  method: ApiMethodType;
  path: string;
  target: DecoratorTarget;
}

export interface ApiRepositoryMeta {
  name: string;
  target: DecoratorTarget;
}