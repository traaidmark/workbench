import { Container } from 'inversify';

import { DecoratorType } from '../lib/schema';
import { decoratorUtility } from '../utils';

import { name } from './app.constants';
import {
  AppModuleInterface,
  ContainerInterface,
  AppProviderMeta
} from './app.schema';

const meta:string = '[APP]';

export class AppService {

  private _container: ContainerInterface;

  constructor() {
    this._container = new Container();
  }

  // PUBLIC METHODS

  public init(): this {

    // Action: Register Providers
    this._registerProviders();

    return this;
  }
  
  public start = () => {
    console.log('I AM STARTING');
    return this;
  }

  // PRIVATE METHODS

  _registerProviders = (): void => {
    console.log(`${meta}: Registering Providers...`);

    const providersMeta: AppProviderMeta[] = decoratorUtility.fetchAll(DecoratorType.Provider) || [];

    providersMeta.forEach((meta) => {


      // Register the provider

      this._container.bind(meta.type)
      .to(meta.target as new (...args: never[]) => unknown)
      .whenTargetNamed(meta.key);

      // Validate the registration

      if (this._container.isBound(meta.type)) {

        const registeredProviders = this._container.getNamed(
          meta.type,
          meta.key
        );

        console.log(
          `[CONTAINER]: Registered ${meta.type}`, 
          registeredProviders
        );
        
      }

    })

  }

  // _registerProviders = <T>() => {
  //   console.log(`${meta}: Registering Providers...`);

  //   

  //   providersMeta.forEach((meta) => {
  //     this._container.bind(meta.type)
  //     .to(meta.target as new (...args: never[]) => unknown)
  //     .whenTargetNamed(meta.key);
  //   }

    //DEBUG SHIT

    // if (this._container.isBound(meta.type)) {
    //   const registeredProviders = this._container.getAll(meta.type)
    //   console.log(`[CONTAINER]: Registered ${meta.type}`, registeredProviders);

    

  
}