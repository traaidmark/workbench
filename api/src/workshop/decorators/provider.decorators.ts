import { SystemMeta, ProviderInterface, DecoratorTarget, MetaType, ProviderMetaInterface} from '@/workshop/lib';

import { metaUtil } from '../utils';

const meta:string = SystemMeta.Decorator.Provider;

export function Provider(provider: ProviderInterface) {
  return function(target: DecoratorTarget): void {

    const meta: ProviderMetaInterface = {
      ...provider,
      target
    }

    metaUtil.addAll(MetaType.Provider, meta, target);

  }
}