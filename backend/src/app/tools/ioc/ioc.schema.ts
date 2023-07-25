// SCHEMA: GENERICS

interface Constructable {
  new(...args: any) : unknown;
}

// INTERFACE: CONTAINER

export interface ContainerInterface {
  
}

// SCHEMA: PROVIDER

export interface BaseProvider {
  type: string;
  token: string;
  imports?: string[];
  asSingleton?: boolean;
}

export interface ValueProvider<T> extends BaseProvider {
  value: T;
}

export interface ClassProvider<T> extends BaseProvider {
  class: Constructable;
}

export type Provider<T = unknown> =
ClassProvider<T> | ValueProvider<T>;
