import { Container, injectable } from 'inversify';

import { MetaUtility, MetaType, MetaTarget } from './utility/meta';

import { ModuleInput } from './core.schema';

// import { AppModule, AppModuleInterface } from './app.module';
// import { HelloModule, HelloModuleInterface } from './hello.module';

export class CoreIoc {
  private _container: Container;

  constructor() {
    this._container = new Container();
  }

  // PUBLIC METHODDS

  public register = (m: unknown[] ): this => {

    console.log('[CoreIoc] registering module: ', m.length);
    console.log('[CoreIoc] registering module: ', m);

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