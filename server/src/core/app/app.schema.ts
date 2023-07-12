import { interfaces } from 'inversify';

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

