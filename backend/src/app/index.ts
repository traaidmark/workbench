import { Container } from '@/app/tools';

import { AppInterface } from '@/app/lib';

export class App implements AppInterface {
  private _ioc: Container;

  constructor(
    ioc: Container
  ) {
    this._ioc = ioc;
  }

  public load = (): this => {
    return this; 
  }

  public build = (): this => {
    return this;
  }

  public start = () => {

  }

}