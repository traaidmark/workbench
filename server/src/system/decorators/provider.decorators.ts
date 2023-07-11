import { injectable, decorate } from 'inversify';

import {
  Int,
  Type
 } from '@/system/lib';

// DECORATOR: PROVIDER
export function Provider(provider: Type.Provider) {
  return function(target: Int.DecoratorTarget): void {

    const currentMeta: Int.ProviderMeta = {
      provider,
      name: (target as { name: string }).name,
      target
    }

    decorate(injectable(), target);
    Reflect.defineMetadata(
      Type.DecoratorType.Provider,
      currentMeta, 
      target
    );

    const previousValues: Int.ProviderMeta[] = Reflect.getMetadata(
      Type.DecoratorType.Provider,
      Reflect,
    ) || [];

    const metaArray = [currentMeta, ...previousValues];

    Reflect.defineMetadata(
      Type.DecoratorType.Provider,
      metaArray,
      Reflect,
    );

  }
}
