import { DecoratorType } from '@/core/lib/schema';
import { DecoratorUtility } from '@/core/utils';

import {
  ProviderMeta,
  ProviderType,
  ProviderContainerInterface,
  ProviderUtilityInterface,
  ERROR
} from '@/core/services/provider';

export class ProviderUtility implements ProviderUtilityInterface {
  
  private _container: ProviderContainerInterface;
  private _metaUtil: DecoratorUtility;
  private _meta: ProviderMeta[];

  constructor(container: ProviderContainerInterface) {
    this._container = container;
    this._metaUtil = new DecoratorUtility();

    this._meta = this._metaUtil.fetchAll(DecoratorType.Provider) || [];
  }

  // DO PREFLIGHT CHECKS

  preflight = (): void => {

    if(this._meta.length === 0) {
      throw new Error(ERROR.EMPTY_PROVIDERS);
    }

    const hasControllers = this._meta.filter(
      i => i.type === ProviderType.ApiController
    ).length > 0;

    if(!hasControllers) {
      throw new Error(ERROR.NO_CONTROLLER);
    }
  }

  // REGISTER PROVIDERS

  register = (type: ProviderType) => {

    const providers = this._meta.filter((p) => p.type === type);

    if(providers.length > 0) {
      providers.forEach((meta) => {
  
        this._container.bind(meta.type)
        .to(meta.target as new (...args: never[]) => unknown)
        .whenTargetNamed(meta.key);
  
      });
    }
    
  }

  // GET PROVIDERS

  getProviders = (type: ProviderType) => {
    if (this._container.isBound(type)) {
      const providers = this._container.getAll(type) || [];
      return providers;
    }
  }

}
