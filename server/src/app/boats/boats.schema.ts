import { Request, Response, RequestHandler } from 'express';

export interface BoatsControllerInterface {
  findOne();
  getAll();
}
export interface BoatsRepositoryInterface {
  findOne();
  getAll();
}