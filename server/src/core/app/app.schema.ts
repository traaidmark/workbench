import { interfaces } from 'inversify';
import { DecoratorTarget } from '../lib/schema';

// SCHEMA: TYPES

export enum AppProviderType {
  Controller = 'workshop:provider:controller',
  Repository = 'workshop:provider:repository',
  Database = 'workshop:provider:database',
  Shared = 'workshop:provider:shared',
  HttpContext = 'workshop:provider:http-context',
}

// SCHEMA: INTERFACES

export interface ContainerInterface extends interfaces.Container {}


export interface AppModuleInterface {
  controller: NewableFunction;
}

export interface AppProviderMeta {
  type: AppProviderType;
  key: string;
  target: DecoratorTarget;
}
