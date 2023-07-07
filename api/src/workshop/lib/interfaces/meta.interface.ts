// import { Middleware } from './server.interface';
import { ConstructorFunction, Prototype } from './generic.interface';
// import { HTTP_TYPE } from '../constants';

export type DecoratorTarget<T = unknown> =
  ConstructorFunction<T> | Prototype<T>;

export type HandlerDecorator = (
  target: DecoratorTarget,
  key: string,
  value: unknown
) => void;

// TYPES

// export interface MetaCtrlInterface {
//   middleware: Array<Middleware>;
//   path: string;
//   target: DecoratorTarget;
// }

// export interface MetaCtrlMethodInterface extends MetaCtrlInterface {
//   key: string;
//   method: HTTP_TYPE;
// }

