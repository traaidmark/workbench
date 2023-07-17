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


// TEMP

