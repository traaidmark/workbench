import { interfaces, decorate, injectable } from 'inversify';
import {
  SystemMeta,
  ProviderMetaInterface,
  ProviderMessage,
  ProviderType,
  DecoratorTarget,
} from '../lib';

const meta:string = SystemMeta.Util.Container;

export const containerUtil = {

  validate(providers: ProviderMetaInterface[]): void {

    const isEmpty = providers.length === 0;
    const noController = providers.filter((p) => p.type === ProviderType.Controller).length === 0;

    if(isEmpty) {
      throw new Error(ProviderMessage.errorNoProvider);
    }
    if(noController) {
      throw new Error(ProviderMessage.errorNoController);
    }

  },

  registerAll(
    container: interfaces.Container,
    providers: ProviderMetaInterface[]
  ) {
    providers.forEach((provider) => {
      const { name } = provider.target as { name: string };

      decorate(injectable(), provider.target);

      container
        .bind(provider.type)
        .to(provider.target as new (...args: Array<never>) => unknown)
        .whenTargetNamed(name);
    });
  },

  fetchType(
    container: interfaces.Container,
    type: ProviderType,
    force: boolean = false,
  ): DecoratorTarget[] {

    if (container.isBound(type)) {
      return container.getAll(type);
    } if (force) {
      throw new Error('NO_CONTROLLERS_FOUND');
    } else {
      return [];
    }

  }

};