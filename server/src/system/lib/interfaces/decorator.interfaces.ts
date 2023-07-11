import { ConstructorFunction, Prototype } from './generic.interfaces';

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