import { interfaces } from 'inversify';

import { META_TYPE, CONTAINER_TYPE } from '@/workshop/lib/constants';
import { MetaCtrlMethodInterface } from '@/workshop/lib/interfaces';

export const routeUtil = {
  
  // GET ROUTE METADATA

  getMetaData(constructor: NewableFunction): MetaCtrlMethodInterface[] {
    const data: MetaCtrlMethodInterface[] = Reflect.getOwnMetadata(
      META_TYPE.ControllerMethod,
      constructor,
    ) || [];
    return data;
  },

};