import { injectable, decorate, inject, named } from 'inversify';

import { DecoratorTarget, DecoratorType } from '@/core/lib/schema';
import { ProviderType, ProviderMeta } from '@/core/services/provider';


// DECORATORS: UTILITY

export const Called = (n: string) => named(n);

// DECORATOR: PROVIDER

export function CreateProvider(type: ProviderType) {
  return function(target: DecoratorTarget): void {

    const currentMeta: ProviderMeta = {
      type,
      key: (target as { name: string }).name,
      target
    }

    decorate(injectable(), target);
    Reflect.defineMetadata(
      DecoratorType.Provider,
      currentMeta, 
      target
    );

    const previousValues: ProviderMeta[] = Reflect.getMetadata(
      DecoratorType.Provider,
      Reflect,
    ) || [];

    const metaArray = [currentMeta, ...previousValues];

    Reflect.defineMetadata(
      DecoratorType.Provider,
      metaArray,
      Reflect,
    );

  }
}

// DECORATOR: HELPERS

export const CreateUtility = CreateProvider(ProviderType.Utility);
export const InjectUtility = inject(ProviderType.Utility);

export const CreateDataSource = CreateProvider(ProviderType.DataSource);
export const InjectDataSource = inject(ProviderType.DataSource);

