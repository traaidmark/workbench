import { interfaces } from 'inversify';

import { controllerUtil } from '@/workshop/utils';
import { SYSTEM_ERRORS } from '@/workshop/lib';

import { MetaCtrlInterface } from './lib/interfaces';
import { CONTAINER_TYPE } from './lib/constants';

export class WorkshopContainer {
  private _container: interfaces.Container;
  constructor(container: interfaces.Container) {
    this._container = container;
  }

  public init() {
    this._registerControllers();
    return this._container;
  }

  private _registerControllers(): void {

    const controllers = controllerUtil.getAllFromMetaData();
    
    if(controllers.length === 0) {
      throw new Error(SYSTEM_ERRORS.controllers.required);
    }

    controllers.forEach((c) => {
      const { name } = c as { name: string };

      this._container.bind(CONTAINER_TYPE.Controller)
      .to(c as new (...args: never[]) => unknown)
      .whenTargetNamed(name);
    })

  }

}