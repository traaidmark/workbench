import { interfaces } from 'inversify';
import { DecoratorTarget } from '@/core/lib/schema';

// SCHEMA: TYPES

export enum ProviderType {
  ApiController = 'provider:api:controller',
  ApiRepository = 'provider:api:repository',
  ApiService = 'provider:api:service',
  ApiHttpContext = 'provider:api:http-context',
  Utility = 'provider:utility',
  Base = 'provider:base',
  System = 'provider:system',
  
}

// SCHEMA: INTERFACES

export interface ProviderServiceInterface {
  getProviders(type: ProviderType);
  instance(): ProviderContainerInterface;
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
