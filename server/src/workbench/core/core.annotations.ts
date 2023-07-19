import { injectable, decorate, inject, named } from 'inversify';

import { DecoratorTarget, DecoratorType } from '@/core/lib/schema';

import { MetaUtility, MetaType, MetaTarget } from './utility/meta';

import { ModuleType, ModuleMeta, ModuleInput } from './core.schema';

const util = new MetaUtility(MetaType.Module);

// DECORATORS: UTILITY

// export const Called = (n: string) => named(n);

// ANNOTATION: MODULE

export function Module(module: ModuleInput) {
  return function(target: MetaTarget): void {

    const currentMeta: ModuleMeta = {
      token: (target as { name: string }).name,
      module,
      target
    }

    util.register<ModuleMeta>(currentMeta, target);

    // decorate(injectable(), target);
    // Reflect.defineMetadata(
    //   DecoratorType.Provider,
    //   currentMeta, 
    //   target
    // );

    // const previousValues: ModuleMeta[] = Reflect.getMetadata(
    //   DecoratorType.Provider,
    //   Reflect,
    // ) || [];

    // const metaArray = [currentMeta, ...previousValues];

    // Reflect.defineMetadata(
    //   DecoratorType.Provider,
    //   metaArray,
    //   Reflect,
    // );

  }
}

// DECORATOR: HELPERS

// export const CreateUtility = CreateProvider(ProviderType.Utility);
// export const InjectUtility = inject(ProviderType.Utility);

// export const CreateDataSource = CreateProvider(ProviderType.DataSource);
// export const InjectDataSource = inject(ProviderType.DataSource);