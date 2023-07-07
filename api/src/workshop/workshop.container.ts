import { Container as IContainer, interfaces, decorate, injectable } from 'inversify';

import {
  SystemMeta,
  MetaType,
  ProviderMetaInterface,
} from '@/workshop/lib';

import { metaUtil, containerUtil } from '@/workshop/utils';

const meta:string = SystemMeta.Container;

export class Container {
  private _container: interfaces.Container;
  constructor() {
    this._container = new IContainer();
  }

  public init() {
    this._registerProviders();
    return this._container; 
  }

  // REGISTER CONTROLLERS

  private _registerProviders(): void {

    const providers = metaUtil.getAll<ProviderMetaInterface>(MetaType.Provider);

    console.log(`${meta}: providers caught`, providers);
    
    containerUtil.validate(providers);

    return containerUtil.registerAll(this._container, providers);

  }

  // // REGISTER REPOSITORIES

  // public fetchType(type: ProviderType): DecoratorTarget[] {
  //   return containerUtil.fetchType(this._container, type);
  // }
}