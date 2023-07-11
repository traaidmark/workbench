import {
  Type,
  Int,
} from '../lib';

import { utils } from '@/system';

export const controllerUtils = {

  // FETCH ALL CONTROLLERS

  fetch(c: NewableFunction): Int.ApiControllerMeta {

    const controller: Int.ApiControllerMeta = utils.decorator.fetchSingle(Type.DecoratorType.Controller, c);
    const methods: Int.ApiControllerMethodMeta[] = utils.decorator.fetchAll(Type.DecoratorType.ControllerMethod, c);

    return {
      ...controller,
      methods
    };

  }

};