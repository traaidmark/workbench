import 'reflect-metadata';

import {
  MetaType,
  DecoratorTarget,
  ApiControllerMeta,
  ApiMiddleware,
  ProviderType,

} from '@/workshop/lib';

import { decoratorUtil } from '../utils';

export function Controller(path: string, ...middleware: ApiMiddleware[]) {
  return function(target: DecoratorTarget): void {

    const currentMetadata: ApiControllerMeta = {
      type: ProviderType.Controller,
      middleware,
      path,
      target,
    };

    decoratorUtil.addAll<ApiControllerMeta>(
      MetaType.Provider,
      currentMetadata,
      target,
    );

  }
}