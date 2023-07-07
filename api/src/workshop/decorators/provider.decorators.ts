import { SystemMeta, ProviderInterface, DecoratorTargetInterface, MetaType, ProviderMetaInterface, DecoratorHandlerInterface} from '@/workshop/lib';

import { metaUtil } from '../utils';

const meta:string = SystemMeta.Decorator.Service;

export function Provider(provider: ProviderInterface) {
  return function(target: DecoratorTargetInterface): void {

    const meta: ProviderMetaInterface = {
      ...provider,
      target
    }

    return metaUtil.addAll(MetaType.Provider, meta, target);

  }
}