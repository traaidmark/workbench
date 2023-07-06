// FUNCTIONS

export type Prototype<T> = {
  [P in keyof T]: T[P] extends NewableFunction ? T[P] : T[P] | undefined;
} & {
  constructor: NewableFunction;
};

export interface ConstructorFunction<T = Record<string, unknown>> {
  new(...args: Array<unknown>): T;
  prototype: Prototype<T>;
}