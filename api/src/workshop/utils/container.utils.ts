import { interfaces, decorate, injectable } from 'inversify';
import {
  SystemMeta,
  ProviderMeta,
  ProviderMessage,
  ProviderType,
  DecoratorTarget,
} from '../lib';

const meta:string = SystemMeta.Util.Container;

export const containerUtil = {

  validate(providers: ProviderMeta[]): void {

    const isEmpty = providers.length === 0;
    const noController = providers.filter((p) => p.type === ProviderType.Controller).length === 0;

    if(isEmpty) {
      throw new Error(ProviderMessage.errorNoProvider);
    }
    if(noController) {
      throw new Error(ProviderMessage.errorNoController);
    }

  },

  registerServices(
    container: interfaces.Container,
    type: ProviderType,
    constructors: DecoratorTarget[],
  ) {
    constructors.forEach((constructor) => {
      const { name } = constructor as { name: string };

      decorate(injectable(), constructor);

      container
        .bind(type)
        .to(constructor as new (...args: Array<never>) => unknown)
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