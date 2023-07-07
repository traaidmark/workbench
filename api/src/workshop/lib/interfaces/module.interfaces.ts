import { DecoratorTarget } from './meta.interface';

export interface ModuleInterface {
  controller: NewableFunction;
}

export interface ModuleMetaInterface {
  controller: NewableFunction;
  target: DecoratorTarget;
}