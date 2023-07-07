import {
  SystemMeta,
  MetaType,
  DecoratorTarget,
  DecoratorHandler,
  ProviderMeta,
  ApiMiddleware,
  ProviderType,

} from '@/workshop/lib';

import { decoratorUtil } from '../utils';

export function Provider(type: ProviderType) {
  return function(target: DecoratorTarget): void {

    const currentMetadata: ProviderMeta = {
      type,
      target,
    };

    decoratorUtil.addAll<ProviderMeta>(MetaType.Provider, currentMetadata, target);

  }
}