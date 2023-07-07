import { Container as IContainer, interfaces, decorate, injectable } from 'inversify';

import {
  SystemMeta,
  MetaType,
  ProviderMetaInterface,
  ProviderMessage,
  ProviderType,
  DecoratorTarget,
} from '@/workshop/lib';

import { metaUtil, containerUtil } from '@/workshop/utils';

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

    const providers = metaUtil.getAll<ProviderMetaInterface>(MetaType.Provider);
    
    containerUtil.validate(providers);

    return containerUtil.registerAll(this._container, providers);

  }

  // // REGISTER REPOSITORIES

  // public fetchType(type: ProviderType): DecoratorTarget[] {
  //   return containerUtil.fetchType(this._container, type);
  // }
}