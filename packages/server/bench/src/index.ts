import { Container, Provider } from 'ioc-container';
import { BenchProviderType } from 'common-workbench-types';

import {
  BenchInterface,
  BenchProviders,
  BenchSystemError,
  BenchTransportInterface
} from './lib';

import coreProviders from './core.module';

export class Bench implements BenchInterface {

  private _ioc: Container;

  private _appProviders: BenchProviders;

  constructor() {
    this._ioc = new Container;
  }

  // PUBLIC METHODS

  public load = (providers: Provider[]): this => {

    // LOAD CORE PROVIDERS

    this._ioc.setMany(coreProviders);

    // LOAD APP MODULES

    const loadRes = this._verifyAndBindProviders(providers);

    console.log(loadRes);

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
      p => p.type === BenchProviderType.Controller
    ).length === 0;
    const noTransport = providers.filter(
      p => p.type === BenchProviderType.Transport
    ).length === 0;
    
    // if(isEmpty) {
    //   throw new Error(BenchSystemError.noProviders);
    // }
    // if(noControllers) {
    //   throw new Error(BenchSystemError.noControllers);
    // }
    // if(noTransport) {
    //   throw new Error(BenchSystemError.noTransport);
    // }

    return this._ioc.setMany(providers);
  
  }

  private _instantiateProviders = (): void => {

    this._appProviders = {
      ...this._appProviders,
      transports: this._ioc.listByType(BenchProviderType.Transport).map(p => this._ioc.getByToken(p.token)) as BenchTransportInterface[],
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