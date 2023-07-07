// import { Middleware } from './server.interface';
import { ConstructorFunction, Prototype } from './generic.interface';
// import { HTTP_TYPE } from '../constants';

export type DecoratorTargetInterface<T = unknown> =
  ConstructorFunction<T> | Prototype<T>;

export type DecoratorHandlerInterface = (
  target: DecoratorTargetInterface,
  key: string,
  value: unknown
) => void;
