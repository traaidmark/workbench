
import { interfaces } from 'inversify';
import { Request, Response, NextFunction } from 'express';

import { Int, Type, } from '@/system/lib';

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
  container: Int.Container;
  request: Request;
  response: Response;
  user: Int.ApiUser<T>;
}

export interface ApiControllerMeta {
  name: string;
  prefix: string;
  target: Int.DecoratorTarget;
  methods?: Int.ApiControllerMethodMeta[];
}
export interface ApiControllerMethodMeta {
  key: string;
  method: Type.ApiMethod;
  path: string;
  target: Int.DecoratorTarget;
}

export interface ApiRepositoryMeta {
  name: string;
  target: Int.DecoratorTarget;
}