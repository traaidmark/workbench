import { DecoratorType, DecoratorTarget } from '../lib/schema';

export class DecoratorUtility {

  // FETCH SINGLE
  fetchSingle<T>(t: DecoratorType, c: DecoratorTarget): T {
    return Reflect.getOwnMetadata(t, c) || undefined;
  }

  // FETCH LIST
  fetchAllFor<T>(t: DecoratorType, c: DecoratorTarget): T[] {
    const data: T[] = Reflect.getOwnMetadata(t, c) as T[] || [];
    return data;      
  }

  // FETCH ALL META FOR A TYPE
  fetchAll<T>(t: DecoratorType): T[] {
    return Reflect.getMetadata(
      t,
      Reflect,
    ) || [];    
  }

  // FETCH LIST
  fetchConstructors<T>(t: DecoratorType): T[] {
    return Reflect.getMetadata(
      t,
      Reflect,
    ).map( (m) => m.target) || [];    
  }

}