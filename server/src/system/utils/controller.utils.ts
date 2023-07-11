import {
  DecoratorType,
  ApiController,
  ApiControllerMeta,
  ApiControllerMethodMeta
} from '../lib';

import { decoratorUtils } from './decorator.utils';

export const controllerUtils = {

  // FETCH ALL CONTROLLERS

  fetch(c: NewableFunction): ApiControllerMeta {

    const controller: ApiControllerMeta = decoratorUtils.fetchSingle(DecoratorType.Controller, c);
    const methods: ApiControllerMethodMeta[] = decoratorUtils.fetchAll(DecoratorType.ControllerMethod, c);

    return {
      ...controller,
      methods
    };

  }

};