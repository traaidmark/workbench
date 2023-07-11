import { utils } from '@/system';

import { Int, Type } from '@/system/lib';

export const provider = {

  // REGISTER
  register: (
    _container: Int.Container,
  ): void => {

    const providersMeta: Int.ProviderMeta[] = utils.decorator.fetchAlls(Type.DecoratorType.Provider) || [];

    providersMeta.forEach((meta) => {
      _container.bind(meta.provider)
      .to(meta.target as new (...args: never[]) => unknown)
      .whenTargetNamed(meta.name);

      //DEBUG SHIT

      if (_container.isBound(meta.provider)) {
        const registeredProviders = _container.getAll(meta.provider)
        console.log(`[CONTAINER]: Registered ${meta.provider}`, registeredProviders);
      }

    });

    

  },

  // VERIFY
  listAll: (
    _container: Int.Container,
    type: Type.Provider,
  ): void => {
    if (_container.isBound(type)) {
      const registeredProviders = _container.getAll(type)
      console.log(`[CONTAINER]: Registered ${type}`, registeredProviders);
    }
  },

};