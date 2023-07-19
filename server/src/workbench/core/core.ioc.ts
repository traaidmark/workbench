import { Container, injectable } from 'inversify';

import { MetaUtility, MetaType, MetaTarget } from './utility/meta';

import { ModuleInput, ModuleTarget } from './core.schema';

// import { AppModule, AppModuleInterface } from './app.module';
// import { HelloModule, HelloModuleInterface } from './hello.module';

export class CoreIoc {
  private _container: Container;
  private _meta: MetaUtility;

  constructor() {
    this._container = new Container();
    this._meta = new MetaUtility(MetaType.Module);
  }

  // PUBLIC METHODDS

  public register = (module: ModuleTarget ): this => {

    console.log('[CoreIoc] registering module: ', module);

    const meta = this._meta.load();

    console.log('[CoreIoc] metadata from first?: ', meta[0].module);
    console.log('[CoreIoc] metadata: ', meta);

    // m.forEach(element => {
      
    // });

    // this._container.bind<AppModuleInterface>('app').to(AppModule);
    // this._container.bind<HelloModuleInterface>('test').to(HelloModule);
    return this;
  }

  public get = (n: string) => {
    return this._container.get(n);
  }

  // PRIVATE METHODS

}