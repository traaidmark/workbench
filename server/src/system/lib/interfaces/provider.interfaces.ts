import { Int, Type } from '@/system/lib';

export type ProviderHandler = (...params: Array<unknown>) => unknown;
export type Provider = Record<string, ProviderHandler>;

export interface ProviderMeta {
  provider: Type.Provider;
  name: string;
  target: Int.DecoratorTarget;
}