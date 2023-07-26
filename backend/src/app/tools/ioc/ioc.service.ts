import {Provider, ClassProvider, ValueProvider, ContainerInterface} from './ioc.schema';

export class Container implements ContainerInterface {

  private _providers: Provider[] = [];

  constructor() {}

  // PUBLIC METHODS

  // BINDING

  public setMany = (p: Provider[]): Provider[] => {
    this._providers = [...this._providers, ...p];
    return this._providers;
  }

  public set = (p: Provider): Provider[] => {
    this._providers = [...this._providers, p];
    return this._providers;
  }

  // GETTING

  public getByToken = <T>(token: string): T => {
    const provider = this._providers.find(p => p.token === token) as T;
    return this._getFactory(provider) as T;
  }

  public listByType = (t: string): Provider[] => {
    return this._providers.filter(p => p.type === t);
  }


  // PRIVATE METHODS

  private _getFactory = <T>(provider: Provider): T => {
    if('class' in provider) {
      return this._asClass(provider) as T;
    }
    if('value' in provider) {
      return this._asValue(provider) as T;
    }
  }

  private _asClass = <T>(provider: ClassProvider<T>) => {

    const instance: T = new provider.class as T;

    const props = this._getClassProps(provider.class);
    
    // if(props.length > 0) {
    //   props.forEach((prop, k) => {
    //     instance[prop] = this.get(provider.imports[k]);
    //   });
    // }

    if(provider.asSingleton) {
      return MakeSingleton.getInstance(instance) as T
    }

    return instance;
  };

  private _asValue = <T>(provider: ValueProvider<T>) => {
    
    const instance: T = provider.value;

    if(provider.asSingleton) {
      return MakeSingleton.getInstance(instance) as T
    }

    return instance;
  };

  private _getClassProps = ( typeOfClass:any) => {
    let a = new typeOfClass();
    let array = Object.getOwnPropertyNames(a);
    return array;//you can apply any filter here
  }

};

class MakeSingleton {

  private static instance: any;

  public static getInstance(n: any): unknown {
    if (!MakeSingleton.instance) {
      MakeSingleton.instance = n;
    }
    return MakeSingleton.instance;
  }

}