import type { Application, NextFunction, Request, RequestHandler, Response } from 'express';

export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}



// TEST INTERFACES

