import { MetaTarget, MetaType } from './utility/meta';

// SCHEMA: GENERICS

export type Prototype<T> = {
  [P in keyof T]: T[P] extends NewableFunction ? T[P] : T[P] | undefined;
} & {
  constructor: NewableFunction;
};

export interface ConstructorFunction<T = Record<string, unknown>> {
  new(...args: Array<unknown>): T;
  prototype: Prototype<T>;
}

// SCHEMA: MODULES

export type ModuleTarget<T = unknown> =
  ConstructorFunction<T> | Prototype<T>;

export interface ModuleObject {
  utility?: any[];
}

export interface ModuleInput {
  providers?: any[];
}
// export interface ModuleInput {
//   imports?: any[];
//   controllers?: any[];
//   providers?: any[];
//   exports?: any[];
// }

// SCHEMA: INTERFACES

export interface ModuleMeta {
  token: string;
  target: MetaTarget;
  providers?: any[];
}

// SCHEMA: PROVIDERS

export enum ProviderType {
  Core = 'Core',
  Transport = 'Transport',
  Source = 'Source',
  Provider = 'Provider',
  Module = 'Module',
}

export interface ProviderMeta {
  token: string;
  type: ProviderType;
  target: MetaTarget;
}

// SCHEMA: PROVIDER INTERFACES

export interface TransportInterface {}
export interface SourceInterface {}