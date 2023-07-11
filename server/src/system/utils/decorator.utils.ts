import { DecoratorType } from '../lib';

export const decoratorUtils = {

  // FETCH SINGLE
  fetchSingle<T>(t: DecoratorType, c: NewableFunction): T {
    return Reflect.getOwnMetadata(t, c) || undefined;
  },

  // FETCH LIST
  fetchAll<T>(t: DecoratorType, c: NewableFunction): T[] {
    const data: T[] = Reflect.getOwnMetadata(t, c) as T[] || [];
    return data;      
  },

};