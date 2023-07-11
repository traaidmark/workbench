import { Container as IContainer, decorate, injectable } from 'inversify';

import { Int } from './lib';

// import {
//   SystemMeta,
//   DecoratorType,
//   ProviderMeta,
//   Provider,
// } from '@/workshop/lib';

import { utils } from '@/system';

const meta:string = '[CONTAINER]';

export class Container {
  private _container: Int.Container;
  constructor() {
    this._container = new IContainer();
  }

  public init() {

    this._registerProviders();

    // this._registerControllers();

    return this._container; 
  }

  // REGISTER CONTROLLERS

  // REGISTER PROVIDERS

  private _registerProviders(): void {

    utils.provider.register(this._container);

  }

}