import { Request, Response, RequestHandler } from 'express';

export interface IUserBase {
  getRandom(): void;
}

// INTERFACES: MODULES

export interface IUserController {
  getRandom(req: Request, res: Response): void;
}
export interface IUserRepository extends IUserBase {
}
export interface IUserService extends IUserBase {
}