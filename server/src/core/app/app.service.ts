import { Container, inject, interfaces } from 'inversify';

import { DecoratorType } from '../lib/schema';
import { decoratorUtility } from '../utils';

import { name } from './app.constants';
import {
  ContainerInterface,
  AppProviderMeta,
  AppProviderType,
  AppUtilityInterface,
} from './app.schema';

import AppUtility from './app.utils';

import { AppProvider } from './app.decorators';

import { BoatsControllerInterface, BoatsRepositoryInterface } from '@/app';

export class AppService {

  private _container: ContainerInterface;
  private _util: AppUtilityInterface;

  constructor() {
    this._container = new Container();
    this._util = new AppUtility(this._container);
  }

    // private _repository: BoatsRepositoryInterface;

  // constructor(
  //   @inject(Type.Provider.Repository) 
  //   @named('BoatsRepository') 
  //   repo: BoatsRepositoryInterface
  // ) {
  //   this._repository = repo;
  // }

  // PUBLIC METHODS

  public init(): this {

    this._util.preflight();
    
    this._registerProviders();

    this._testController()

    return this;
  }
  
  public start = () => {
    console.log('I AM STARTING');
    return this;
  }

  // PRIVATE METHODS

  _registerProviders = (): void => {

    console.log(`${name}: Registering Providers...`);

    // REGISTER BASE PROVIDERS

    this._util.register(AppProviderType.Base);

    // REGISTER APP PROVIDERS

    this._util.register(AppProviderType.Repository);
    this._util.register(AppProviderType.Controller);

  }

  private _testController = () => {

    const testController: BoatsControllerInterface = this._container.getNamed(AppProviderType.Controller, 'BoatsController');

    console.log(
      `${name}: Controller Factory Test`, 
      testController.getAll()
    );

  }
}