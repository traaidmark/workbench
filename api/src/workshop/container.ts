import { Container as IContainer, interfaces, decorate, injectable } from 'inversify';

import {
  SystemMeta,
  ContainerType,
  MetaType,
  ModuleInterface
} from '@/workshop/lib';

import { metaUtil } from '@/workshop/utils';

import {UserController, UserRepository} from '@/modules/user';

const meta:string = SystemMeta.Container;

export class Container {
  private _container: interfaces.Container;
  constructor() {
    this._container = new IContainer();
  }

  public init() {

    console.log(`${meta} initting`);
    
    this._registerControllers();
    this._registerRepositories();

    return this._container; 
  }

  // REGISTER CONTROLLERS

  private _registerControllers(): void {

    const test = metaUtil.getAll<ModuleInterface>(MetaType.Module);

    console.log(`${meta} test data`, test);

    this._container.bind<UserController>(ContainerType.Controller).to(UserController).whenTargetNamed('UserController');
  }

  // REGISTER REPOSITORIES

  private _registerRepositories(): void {
    this._container.bind(ContainerType.Repository).to(UserRepository).whenTargetNamed('UserRepository');
  }
}