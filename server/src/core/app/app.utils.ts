import { DecoratorType } from '@/core/lib/schema';
import { decoratorUtility } from '@/core/utils';

import {
  AppProviderMeta,
  AppProviderType,
  ContainerInterface,
  AppUtilityInterface
} from './app.schema';

import { ERROR } from './app.constants';

 class AppUtility implements AppUtilityInterface {
  
  private _container: ContainerInterface;
  private _meta: AppProviderMeta[];

  constructor(container: ContainerInterface) {
    this._container = container;
    this._meta = decoratorUtility.fetchAll(DecoratorType.Provider) || [];
  }

  // DO PREFLIGHT CHECKS

  preflight = (): void => {

    if(this._meta.length === 0) {
      throw new Error(ERROR.EMPTY_PROVIDERS);
    }

    const hasControllers = this._meta.filter(
      i => i.type === AppProviderType.Controller
    ).length > 0;

    if(!hasControllers) {
      throw new Error(ERROR.NO_CONTROLLER);
    }
  }

  // REGISTER PROVIDERS

  register = (type: AppProviderType) => {

    const providers = this._meta.filter((p) => p.type === type);

    if(providers.length === 0) {
      throw new Error(`${ERROR.EMPTY_PROVIDER_TYPE} ${type}`);
    }

    providers.forEach((meta) => {

      // Register the provider

      this._container.bind(meta.type)
      .to(meta.target as new (...args: never[]) => unknown)
      .whenTargetNamed(meta.key);

      // Validate the registration

      // if (this._container.isBound(meta.type)) {

      //   const registeredProviders = this._container.getNamed(
      //     meta.type,
      //     meta.key
      //   );

      // }

    });
  }

}

export default AppUtility;

// export const appUtil = {

//   // PREFLIGHT
//   preflight: () => {
    
//     const providersMeta: AppProviderMeta[] = decoratorUtility.fetchAll(DecoratorType.Provider) || [];

//     if(providersMeta.length === 0) {
//       throw new Error(ERROR.EMPTY_PROVIDERS);
//     }

//     const hasControllers = providersMeta.filter(
//       i => i.type === AppProviderType.Controller
//     ).length === 0;

//     if(!hasControllers) {
//       throw new Error(ERROR.NO_CONTROLLER);
//     }

//   },

//   // REGISTER PROVIDER
//   register: (
//     c: ContainerInterface,
//     t: AppProviderType,
//   ) => {
    
//     const providersMeta: AppProviderMeta[] = decoratorUtility.fetchAll(DecoratorType.Provider) || [];

//     providersMeta.filter((p) => p.type === t).forEach((meta) => {

//       // Register the provider

//       c.bind(meta.type)
//       .to(meta.target as new (...args: never[]) => unknown)
//       .whenTargetNamed(meta.key);

//       // Validate the registration

//       // if (c.isBound(meta.type)) {

//       //   const registeredProviders = c.getNamed(
//       //     meta.type,
//       //     meta.key
//       //   );

//       // }

//     });
//   },

//   validate: () => {

//   }

  

// };