import { injectable, decorate, inject, named } from 'inversify';

import { DecoratorTarget, DecoratorType } from '@/core/lib/schema';

import { MetaUtility, MetaType, MetaTarget } from './utility/meta';

import { ProviderType, ProviderMeta, ModuleMeta, ModuleInput } from './core.schema';

const moduleMeta = new MetaUtility(MetaType.Module);
const providerMeta = new MetaUtility(MetaType.Provider);

// DECORATORS: UTILITY

export const Called = (n: string) => named(n);

// ANNOTATION: MODULE

export function Module(module: ModuleInput) {
  return function(target: MetaTarget): void {

    const currentMeta: ModuleMeta = {
      token: (target as { name: string }).name,
      providers: module.providers,
      target
    }

    moduleMeta.register<ModuleMeta>(currentMeta, target);
  }
}

// ANNOTATION: PROVIDER

export function RegisterProvider<T>(type: ProviderType) {
  return function(target: MetaTarget): void {

    const currentMeta: ProviderMeta = {
      token: (target as { name: string }).name,
      type,
      target
    }

    decorate(injectable(), target);

    providerMeta.register<ProviderMeta>(currentMeta, target);
  }
}

// DECORATOR: HELPERS

export const TransportationProvider = RegisterProvider(ProviderType.Transport);
export const SourceProvider = RegisterProvider(ProviderType.Source);
export const CoreProvider = RegisterProvider(ProviderType.Core);

export const InjectCore = inject(ProviderType.Core);
// export const InjectUtility = inject(ProviderType.Utility);

// export const CreateDataSource = CreateProvider(ProviderType.DataSource);
// export const InjectDataSource = inject(ProviderType.DataSource);