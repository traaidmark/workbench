import { Container, Provider } from '@/app/tools/ioc';

import {
  AppInterface,
  AppProviderType,
  AppProviders,
  AppSystemError,
  AppTransportInterface
} from '@/app/lib';

export class App implements AppInterface {

  private _ioc: Container;

  private _appProviders: AppProviders;

  constructor(
    ioc: Container
  ) {
    this._ioc = ioc;
  }

  // PUBLIC METHODS

  public load = (providers: Provider[]): this => {

    const loadRes = this._verifyAndBindProviders(providers);

    console.log(`Loaded ${loadRes.length} Providers`);

    this._instantiateProviders();

    return this;
  }

  public init = (): this => {
    this._initTransports();
    return this;
  }

  public build = (): this => {
    this._buildTransports();
    return this;
  }

  public start = (): void => {

    this._startTransports()

  }

  // PRIVATE METHODS

  private _verifyAndBindProviders = (providers: Provider[]): Provider[] => {
    const isEmpty = providers.length === 0;
    const noControllers = providers.filter(
      p => p.type === AppProviderType.Controller
    ).length === 0;
    const noTransport = providers.filter(
      p => p.type === AppProviderType.Transport
    ).length === 0;
    
    if(isEmpty) {
      throw new Error(AppSystemError.noProviders);
    }
    if(noControllers) {
      throw new Error(AppSystemError.noControllers);
    }
    // if(noTransport) {
    //   throw new Error(AppSystemError.noTransport);
    // }

    return this._ioc.setMany(providers);
  
  }

  private _instantiateProviders = (): void => {

    this._appProviders = {
      ...this._appProviders,
      transports: this._ioc.listByType(AppProviderType.Transport).map(p => this._ioc.getByToken(p.token)) as AppTransportInterface[],
    }

    console.log(this._appProviders);

    return ;
  }

  private _initTransports = (): void => {

    this._appProviders.transports.forEach(t => t.init([]));

    return ;
  }

  private _buildTransports = (): void => {

    this._appProviders.transports.forEach(t => t.build([]));

    return ;
  }

  private _startTransports = (): void => {

    this._appProviders.transports.forEach(t => t.start());

    return ;
  }

}