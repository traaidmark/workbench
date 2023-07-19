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


export interface ModuleType {
  Utility: 'core:module:utility';
  Misc: 'core:module:misc';
}

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
  module: ModuleInput;
}