import { DecoratorType } from '@/core/lib/schema';
import { decoratorUtility } from '@/core/utils';

import {
  ProviderMeta,
  ProviderType,
  ProviderContainerInterface,
  ProviderUtilityInterface,
  ERROR
} from '@/core/services/provider';

export class ProviderUtility implements ProviderUtilityInterface {
  
  private _container: ProviderContainerInterface;
  private _meta: ProviderMeta[];

  constructor(container: ProviderContainerInterface) {
    this._container = container;
    this._meta = decoratorUtility.fetchAll(DecoratorType.Provider) || [];
  }

  // DO PREFLIGHT CHECKS

  preflight = (): void => {

    if(this._meta.length === 0) {
      throw new Error(ERROR.EMPTY_PROVIDERS);
    }

    const hasControllers = this._meta.filter(
      i => i.type === ProviderType.Controller
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

}
