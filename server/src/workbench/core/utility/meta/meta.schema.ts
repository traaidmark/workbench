import {ConstructorFunction, Prototype } from '@/workbench/core/core.schema';

// SCHEMA: META TYPES

export enum MetaType {
  Module = 'workshop:decorator:provider',
}

// SCHEMA: META INTERFACES

export type MetaTarget<T = unknown> =
  ConstructorFunction<T> | Prototype<T>;

export type MetaHandler = (
  target: MetaTarget,
  key: string,
  value: unknown
) => void;

export interface MetaInterface<T> {
  target: MetaTarget;
  key: string;
  value: T;
}