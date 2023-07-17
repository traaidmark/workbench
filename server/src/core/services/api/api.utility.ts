import { DecoratorMeta, DecoratorType, ConstructorFunction } from '@/core/lib/schema';
import { DecoratorUtility } from '@/core/utils';

import { ApiUtilityInterface, ApiControllerMeta, ApiEndpointMeta } from '@/core/services/api';

export class ApiUtility implements ApiUtilityInterface {

  // private _container: ProviderContainerInterface;
  private _metaUtil: DecoratorUtility;

  constructor() {
    this._metaUtil = new DecoratorUtility();
  }

  fetch(constructor: ConstructorFunction): ApiControllerMeta {

    const controller: DecoratorMeta<ApiControllerMeta> = this._metaUtil.fetchSingle(DecoratorType.Controller, constructor);
    const endpoints: DecoratorMeta<ApiEndpointMeta>[] = this._metaUtil.fetchAllFor(DecoratorType.ControllerEndpoint, constructor);

    return {
      key: controller.key,
      path: controller.value.path,
      middleware: controller.value.middleware,
      endpoints: endpoints.map(e => {
        return {
          key: e.key,
          method: e.value.method,
          path: e.value.path,
          middleware: e.value.middleware,
        }
      })
    };

  }

} 