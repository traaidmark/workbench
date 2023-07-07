import { DecoratorTarget, ProviderType } from '@/workshop/lib';

export interface ProviderMeta {
  type: ProviderType;
  target: DecoratorTarget;
}