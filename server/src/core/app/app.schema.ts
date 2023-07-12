import { interfaces } from 'inversify';
import { DecoratorTarget } from '../lib/schema';

// SCHEMA: TYPES

export enum AppProviderType {
  Controller = 'workshop:provider:controller',
  Repository = 'workshop:provider:repository',
  Base = 'workshop:provider:base',
  System = 'workshop:provider:system',
  HttpContext = 'workshop:provider:http-context',
}

// SCHEMA: INTERFACES

export interface AppUtilityInterface {
  preflight(): void;
  register(type: AppProviderType): void;
}


export interface ContainerInterface extends interfaces.Container {}


export interface AppModuleInterface {
  controller: NewableFunction;
}

export interface AppProviderMeta {
  type: AppProviderType;
  key: string;
  target: DecoratorTarget;
}
