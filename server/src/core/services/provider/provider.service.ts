import { Container, injectable } from 'inversify';

import {
  ProviderContainerInterface,
  ProviderType,
  ProviderUtilityInterface,
  ProviderUtility,
  AddBase,
  Name
} from '@/core/services/provider';

import { LoggerInterface, LoggerProvider } from '@/core/providers';

@injectable()
export class ProviderService {

  private _container: ProviderContainerInterface;
  private _util: ProviderUtilityInterface;
  private _log: LoggerInterface;

  constructor() {
    this._container = new Container();
    this._util = new ProviderUtility(this._container);
    this._init();
    this._log = new LoggerProvider();
  }

  // PUBLIC METHODS
  
  public start = () => {
    this._log.happy();
    console.log('I AM STARTING');
    return this;
  }

  // PRIVATE METHODS

  private _init(): void {

    this._util.preflight();
    
    this._registerProviders();
  }

  private _registerProviders = (): void => {

    // REGISTER BASE PROVIDERS

    this._util.register(ProviderType.Base);

    // REGISTER SYSTEM PROVIDERS

    this._util.register(ProviderType.System);

    // REGISTER APP PROVIDERS

    this._util.register(ProviderType.Repository);
    this._util.register(ProviderType.Controller);

  }
  
}