import { Container, injectable, decorate } from 'inversify';

import { MetaUtility, MetaType } from './utility';

import { ModuleTarget, ProviderMeta, ProviderType } from './core.schema';

import {
  LoggerServiceInterface,
  LoggerService,
  MetaService,
  MetaServiceInterface,
} from '@/workbench/providers/core';

// import { AppModule, AppModuleInterface } from './app.module';
// import { HelloModule, HelloModuleInterface } from './hello.module';

export class CoreIoc {
  private _container: Container;
  private _moduleMeta: MetaUtility;
  private _providerMeta: MetaUtility;
  private _meta: MetaServiceInterface;

  constructor() {
    this._container = new Container();

    this._registerCoreProviders();

    this._moduleMeta = new MetaUtility(MetaType.Module);
    this._providerMeta = new MetaUtility(MetaType.Provider);

    this._meta = this._container.getNamed<MetaServiceInterface>(ProviderType.Core, 'Meta');
    this._meta.setnamespace('IOC');
    
  }

  // PUBLIC METHODDS

  public loadModule = (module: ModuleTarget ): this => {
    
    this._meta.report();
    this._meta.log().warn('hello warning?!')

    this._registerProviders();

    return this;
  }
  // PRIVATE METHODDS

  

  public get = <T>(n: string) => {
    return this._container.get<T>(n);
  }

  public getByName = <T>(t: ProviderType, n: string): T => {
    return this._container.getNamed(t, n);
  }

  // PRIVATE METHODS

  private _registerProviders = (): void => {

    console.log('[CoreIoc] registering provider: ');

    const providerMeta = this._providerMeta.load<ProviderMeta>();

    providerMeta
      .filter(p => p.type !== ProviderType.Core)
      .forEach(provider => {
        console.log('[CoreIoc] Register: ', provider.token);
        
        // decorate(injectable(), provider.target);

        this._container.bind(provider.type)
          .to(provider.target as new (...args: never[]) => unknown)
          .whenTargetNamed(provider.token);
      });
    
  }

  private _registerCoreProviders = (): void => {

    this._container.bind<LoggerServiceInterface>(ProviderType.Core).to(LoggerService).whenTargetNamed('Logger');

    this._container.bind<MetaServiceInterface>(ProviderType.Core).to(MetaService).whenTargetNamed('Meta');
    
  }

}