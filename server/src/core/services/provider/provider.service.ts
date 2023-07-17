import { Container, injectable } from 'inversify';

import {
  ProviderContainerInterface,
  ProviderType,
  ProviderUtilityInterface,
  ProviderUtility,
  ProviderServiceInterface
} from '@/core/services/provider';

@injectable()
export class ProviderService implements ProviderServiceInterface {

  private _container: ProviderContainerInterface;
  private _util: ProviderUtilityInterface;

  constructor() {
    this._container = new Container();
    this._util = new ProviderUtility(this._container);
    this._init();
  }

  // PUBLIC METHODS

  public getProviders = (type: ProviderType) => {
    return this._util.getProviders(type);
  }

  public instance = (): ProviderContainerInterface => this._container;

  // PRIVATE METHODS

  private _init(): void {

    this._util.preflight();
    
    this._registerProviders();
  }

  private _registerProviders = (): void => {

    // REGISTER UTILITY PROVIDERS

    this._util.register(ProviderType.Utility);

    // REGISTER SYSTEM PROVIDERS

    this._util.register(ProviderType.System);

    // REGISTER API PROVIDERS

    this._util.register(ProviderType.ApiRepository);
    this._util.register(ProviderType.ApiService);
    this._util.register(ProviderType.ApiController);

  }
  
}