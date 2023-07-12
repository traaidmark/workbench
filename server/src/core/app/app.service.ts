import { Container, inject, interfaces } from 'inversify';

import { DecoratorType } from '../lib/schema';
import { decoratorUtility } from '../utils';

import { name } from './app.constants';
import {
  ContainerInterface,
  AppProviderMeta,
  AppProviderType,
  AppUtilityInterface,
} from './app.schema';

import AppUtility from './app.utils';

export class AppService {

  private _container: ContainerInterface;
  private _util: AppUtilityInterface;

  constructor(
  ) {
    this._container = new Container();
    this._util = new AppUtility(this._container);
  }

  // PUBLIC METHODS

  public init(): this {

    this._util.preflight();
    
    this._registerProviders();

    return this;
  }
  
  public start = () => {
    console.log('I AM STARTING');
    return this;
  }

  // PRIVATE METHODS

  private _registerProviders = (): void => {

    // REGISTER BASE PROVIDERS

    this._util.register(AppProviderType.Base);

    // REGISTER APP PROVIDERS

    this._util.register(AppProviderType.Repository);
    this._util.register(AppProviderType.Controller);

  }
  
}