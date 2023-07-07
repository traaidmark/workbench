import { DecoratorTarget } from './meta.interface';

export interface ModuleInterface {
  name: string;
  controller: NewableFunction;
}

export interface ModuleMetaInterface {
  name: string;
  controller: NewableFunction;
}