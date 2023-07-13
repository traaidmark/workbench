import { Request, Response, RequestHandler } from 'express';

export enum Boats {
  Controller = 'BoatsController',
  Service = 'BoatsService',
  Repository = 'BoatsRepository',
}

export interface BoatsControllerInterface {
  findOne(req: Request, res: Response): void;
  getAll(req: Request, res: Response): void;
}
export interface BoatsRepositoryInterface {
  findOne();
  getAll();
}
export interface BoatsServiceInterface {
  findOne();
  getAll();
}