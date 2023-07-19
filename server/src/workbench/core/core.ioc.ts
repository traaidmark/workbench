import { Container, injectable, decorate } from 'inversify';

import { MetaUtility, MetaType, MetaTarget } from './utility';

import { ModuleInput, ModuleTarget, ProviderMeta, ProviderType } from './core.schema';

// import { AppModule, AppModuleInterface } from './app.module';
// import { HelloModule, HelloModuleInterface } from './hello.module';

export class CoreIoc {
  private _container: Container;
  private _moduleMeta: MetaUtility;
  private _providerMeta: MetaUtility;

  constructor() {
    this._container = new Container();
    this._moduleMeta = new MetaUtility(MetaType.Module);
    this._providerMeta = new MetaUtility(MetaType.Provider);
  }

  // PUBLIC METHODDS

  public loadModule = (module: ModuleTarget ): this => {

    console.log('[CoreIoc] registering module: ', module);
    
    const moduleMeta = this._moduleMeta.load<ProviderMeta>();
    
    console.log('[CoreIoc] module Meta: ', moduleMeta);

    this._registerProviders()

    
    

    // moduleMeta.module.forEach(element => {
    //   console.log('[CoreIoc] registering module: ', module);
    // });

    // this._container.bind<AppModuleInterface>('app').to(AppModule);
    // this._container.bind<HelloModuleInterface>('test').to(HelloModule);
    return this;
  }
  // PRIVATE METHODDS

  

  public get = (n: string) => {
    return this._container.get(n);
  }

  public getByName = <T>(t: ProviderType, n: string): T => {
    return this._container.getNamed(t, n);
  }

  // PRIVATE METHODS

  private _registerProviders = (): void => {

    console.log('[CoreIoc] registering provider: ');

    const providerMeta = this._providerMeta.load<ProviderMeta>();

    providerMeta.forEach(provider => {
      console.log('[CoreIoc] Register: ', provider.token);
      
      // decorate(injectable(), provider.target);

      this._container.bind(provider.type)
        .to(provider.target as new (...args: never[]) => unknown)
        .whenTargetNamed(provider.token);
    });
    
  }

}