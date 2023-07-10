import { Container as IContainer, interfaces, decorate, injectable } from 'inversify';

import {
  SystemMeta,
  MetaType,
  ProviderMeta,
  ProviderType,
} from '@/workshop/lib';

import { decoratorUtil, containerUtil } from '@/workshop/utils';

const meta:string = SystemMeta.Container;

export class Container {
  private _container: interfaces.Container;
  constructor() {
    this._container = new IContainer();
  }

  public init() {
    this._registerControllers();
    return this._container; 
  }

  // REGISTER CONTROLLERS

  private _registerControllers(): void {

    const controllers = decoratorUtil.getControllers();

    containerUtil.registerServices(
      this._container,
      ProviderType.Controller,
      controllers,
    );

  }

  // REGISTER PROVIDERS

  // private _registerProviders(): void {

  //   const providers = decoratorUtil.getProviders<ProviderMeta>();
    
  //   containerUtil.validate(providers);

  //   return containerUtil.registerAll(this._container, providers);

  // }
}