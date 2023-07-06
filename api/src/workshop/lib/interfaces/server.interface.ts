import type { Application, NextFunction, Request, RequestHandler, Response } from 'express';

import { interfaces } from 'inversify';

// FUNCTIONS



// META

export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}


// MIDDLEWARE

export type Middleware = (string | symbol | RequestHandler);

// CONTEXT

export interface HttpContextInterface<T = unknown> {
  container: interfaces.Container;
  request: Request;
  response: Response;
  // user: Principal<T>;
}

// CONTROLLER 

export type ControllerHandlerInterface = (...params: Array<unknown>) => unknown;
export type ControllerInterface = Record<string, ControllerHandlerInterface>;