import { DecoratorTargetInterface, ProviderType } from '@/workshop/lib';

export interface ProviderInterface {
  type: ProviderType;
}
export interface ProviderMetaInterface {
  type: ProviderType;
  target: DecoratorTargetInterface;
}