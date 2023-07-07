import { Container as IContainer, interfaces, decorate, injectable } from 'inversify';

import { CONTAINER_TYPE } from '@/workshop/lib';

import {UserController, UserRepository} from '@/modules/user';

export class Container {
  private _container: interfaces.Container;
  constructor() {
    this._container = new IContainer();
  }

  public init() {

    console.log('[CONTAINER]: Init');

    
    this._registerControllers();
    this._registerRepositories();

    return this._container; 
  }

  // REGISTER CONTROLLERS

  private _registerControllers(): void {
    this._container.bind<UserController>(CONTAINER_TYPE.Controller).to(UserController).whenTargetNamed('UserController');
  }

  // REGISTER REPOSITORIES

  private _registerRepositories(): void {
    this._container.bind(CONTAINER_TYPE.Repository).to(UserRepository).whenTargetNamed('UserRepository');
  }
}