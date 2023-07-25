import { Container, Provider } from '@/app/tools/ioc';

import { AppInterface, AppProviderType, AppSystemError } from '@/app/lib';

export class App implements AppInterface {
  private _ioc: Container;

  constructor(
    ioc: Container
  ) {
    this._ioc = ioc;
  }

  // PUBLIC METHODS

  public load = (providers: Provider[]): this => {

    const loadRes = this._verifyAndBindProviders(providers);

    console.log(loadRes);

    return this;
  }

  public build = (): this => {
    return this;
  }

  public start = (): void => {

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

}