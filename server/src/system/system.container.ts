import { Container as IContainer, interfaces, decorate, injectable } from 'inversify';
import { DecoratorType, ContainerType } from './lib';

// import {
//   SystemMeta,
//   DecoratorType,
//   ProviderMeta,
//   ProviderType,
// } from '@/workshop/lib';

// import { decoratorUtil, containerUtil } from '@/workshop/utils';

const meta:string = '[CONTAINER]';

export class Container {
  private _container: interfaces.Container;
  constructor() {
    this._container = new IContainer();
  }

  public init() {
    this._registerControllers();

    if (this._container.isBound(ContainerType.Controller)) {

      const registeredControllers = this._container.getAll(ContainerType.Controller)

      console.log(`${meta}: Registered Controllers`, registeredControllers);
    }

    return this._container; 
  }

  // REGISTER CONTROLLERS

  private _registerControllers(): void {

    console.log(`${meta}: Registering controllers...`)

    // GET FROM META

    const controllers = Reflect.getMetadata(
      DecoratorType.Controller,
      Reflect,
    ).map( (m) => m.target) || [];

    // LOOP THROUGH

    controllers.forEach((c) => {
      const { name } = c as { name: string };
      this._container.bind(ContainerType.Controller)
      .to(c as new (...args: never[]) => unknown)
      .whenTargetNamed(name);
    });

  }

  // REGISTER PROVIDERS

  // private _registerProviders(): void {

  //   const providers = decoratorUtil.getProviders<ProviderMeta>();
    
  //   containerUtil.validate(providers);

  //   return containerUtil.registerAll(this._container, providers);

  // }
}