import { injectable, decorate, inject, named } from 'inversify';

import { AppProviderType, AppProviderMeta } from './app.schema';
import { DecoratorTarget, DecoratorType } from '../lib/schema';

// DECORATORS: UTILITY

export const AddRepo = inject(AppProviderType.Repository);
export const AddBase = inject(AppProviderType.Base);

export const Name = (n: string) => named(n);

// DECORATOR: PROVIDER

export function AppProvider(type: AppProviderType) {
  return function(target: DecoratorTarget): void {

    const currentMeta: AppProviderMeta = {
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

    const previousValues: AppProviderMeta[] = Reflect.getMetadata(
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
