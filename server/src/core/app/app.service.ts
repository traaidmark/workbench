import { Container } from 'inversify';

import { name } from './app.constants';
import { AppModuleInterface, ContainerInterface } from './app.schema';

const meta:string = '[APP]';

export class AppService {
  private _container: ContainerInterface;

  constructor() {
    this._container = new Container();
  }

  // PUBLIC METHODS

  public init(): this {
    return this;
  }
  
  public addModule = (modules: AppModuleInterface): this => {
    console.log(modules)
    return this;
  }
  public addModules = (modules: AppModuleInterface[]): this => {
    console.log(modules)
    return this;
  }
  
  public start = () => {
    console.log('I AM STARTING');
    return this;
  }

  // PRIVATE METHODS

  _registerProvider = <T>() => {

  }

};