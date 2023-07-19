import { Container, injectable } from 'inversify';

import { Hello, HelloInterface } from '../modules/hello';

class AppContainer {
  private _container: Container;

  constructor() {
    this._container = new Container();
  }

  // PUBLIC METHODDS

  public registration = (): this => {
    console.log('registering modules!');
    this._container.bind<HelloInterface>('test').to(Hello);
    return this;
  }

  // PRIVATE METHODS

}

export default AppContainer;
