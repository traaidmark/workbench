import { ApiMethodType } from '@/system/lib/constants';

export interface ApiControllerMeta {
  path: string;
  target: NewableFunction;
}
export interface ApiControllerMethodMeta {
  method: ApiMethodType;
  path: string;
  target: NewableFunction;
}
export interface Controller {
  path: string;
  target: NewableFunction;
}