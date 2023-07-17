import { Request, Response } from 'express';

// MODEL

export interface UserModel {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  lastAuthAt: Date;
}

// SCHEMA: PROVIDERS

// SCHEMA: PROVIDER: REPOSITORY

export interface UserRepoInterface {
  fetchAll(): UserModel[];
}

// SCHEMA: PROVIDER: SERVICE

export interface UserServiceInterface {
  fetchAll(): UserModel[];
}

// SCHEMA: PROVIDER: SERVICE

export interface UserControllerInterface {
  fetchAll(req: Request, res: Response): void;
}