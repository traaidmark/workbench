import { Request, Response, RequestHandler } from 'express';

export interface IMockBase {
  getRandom(): void;
}

// INTERFACES: MODULES

export interface IMockController {
  getRandom(req: Request, res: Response): void;
}
export interface IMockRepository extends IMockBase {
}
export interface IMockService extends IMockBase {
}


// INTERFACES: Mock

export interface Mock {
  id: string;
  Mockname: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  lastAuthAt?: Date;
}