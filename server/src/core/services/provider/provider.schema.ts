import { interfaces } from 'inversify';
import { DecoratorTarget } from '@/core/lib/schema';

// SCHEMA: TYPES

export enum ProviderType {
  Controller = 'workshop:provider:controller',
  Repository = 'workshop:provider:repository',
  Base = 'workshop:provider:base',
  System = 'workshop:provider:system',
  HttpContext = 'workshop:provider:http-context',
}

// SCHEMA: INTERFACES

export interface ProviderServiceInterface {
  getProviders(type: ProviderType)
}

export interface ProviderUtilityInterface {
  preflight(): void;
  register(type: ProviderType): void;
  getProviders(type: ProviderType): void;
}

export interface ProviderContainerInterface extends interfaces.Container {}

export interface ProviderMeta {
  type: ProviderType;
  key: string;
  target: DecoratorTarget;
}
