import type { Application, NextFunction, Request, RequestHandler, Response } from 'express';

import { interfaces } from 'inversify';

// FUNCTIONS



// META

export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}


// MIDDLEWARE

export type Middleware = (string | symbol | RequestHandler);

//