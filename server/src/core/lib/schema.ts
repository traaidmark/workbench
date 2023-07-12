import { RequestHandler } from 'express';

// SCHEMA: GENERIC INTERFACES

export interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

export type Prototype<T> = {
  [P in keyof T]: T[P] extends NewableFunction ? T[P] : T[P] | undefined;
} & {
  constructor: NewableFunction;
};

export interface ConstructorFunction<T = Record<string, unknown>> {
  new(...args: Array<unknown>): T;
  prototype: Prototype<T>;
}

// SCHEMA: DECORATOR TYPES

export enum DecoratorType {
  Provider = 'workshop:decorator:provider',
}

// SCHEMA: DECORATOR INTERFACES

export type DecoratorTarget<T = unknown> =
  ConstructorFunction<T> | Prototype<T>;

export type DecoratorHandler = (
  target: DecoratorTarget,
  key: string,
  value: unknown
) => void;

export interface DecoratorMeta {
  target: DecoratorTarget,
  key: string,
  value: unknown
}

// SCHEMA: EXPRESS INTERFACES