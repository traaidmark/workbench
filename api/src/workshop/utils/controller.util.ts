import { interfaces } from 'inversify';

import { META_TYPE, CONTAINER_TYPE } from '@/workshop/lib/constants';
import { MetaCtrlInterface } from '@/workshop/lib/interfaces';

export const controllerUtil = {

  // GET CONTROLLERS FROM METADATA

  getAllFromMetaData() {

    const data = Reflect.getMetadata(
      META_TYPE.Controller,
      Reflect,
    ) || [];

    return data.map( (m) => m.target);
  },
  
  // GET CONTROLLER METADATA

  getMetaData(constructor) {
    const data = Reflect.getOwnMetadata(
      META_TYPE.Controller,
      constructor,
    )
    return data;
  },

  // GET CONTROLLER FROM CONTAINER

  getAllFromContainer(
    container: interfaces.Container,
    forceControllers: boolean = false,
  ): any[] {
    if (container.isBound(CONTAINER_TYPE.Controller)) {
      return container.getAll(CONTAINER_TYPE.Controller);
    } if (forceControllers) {
      throw new Error('NO_CONTROLLERS_FOUND');
    } else {
      return [];
    }
  }

};