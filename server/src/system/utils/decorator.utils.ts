import { Type } from '../lib';

export const decorator = {

  // FETCH SINGLE
  fetchSingle<T>(t: Type.DecoratorType, c: NewableFunction): T {
    return Reflect.getOwnMetadata(t, c) || undefined;
  },

  // FETCH LIST
  fetchAll<T>(t: Type.DecoratorType, c: NewableFunction): T[] {
    const data: T[] = Reflect.getOwnMetadata(t, c) as T[] || [];
    return data;      
  },

  // FETCH ALL META FOR A TYPE
  fetchAlls<T>(t: Type.DecoratorType): T[] {
    return Reflect.getMetadata(
      t,
      Reflect,
    ) || [];    
  },

  // FETCH LIST
  fetchConstructors<T>(t: Type.DecoratorType): T[] {
    return Reflect.getMetadata(
      t,
      Reflect,
    ).map( (m) => m.target) || [];    
  },

};