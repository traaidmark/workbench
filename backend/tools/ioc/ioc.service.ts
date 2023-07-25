import {Provider, ClassProvider, ValueProvider} from './ioc.schema';

export class Container {

  private _providers: Provider[] = [];

  constructor() {}

  public listAll = (): Provider[] => {
    return this._providers;
  };

  // Registering the instances
  public bindMany = (p: Provider[]) => {
    this._providers = [...this._providers, ...p];
  }

  public bindOne = (p: Provider) => {
    this._providers = [...this._providers, p];
  }

  public get = <T>(token: string): T => {
    const provider = this._providers.find(p => p.token === token);
    return this._getFactory(provider) as T;
  }

  private _getFactory = (provider: Provider) => {
    if('class' in provider) {
      return this._asClass(provider);
    }
    if('value' in provider) {
      return this._asValue(provider);
    }
  }

  private _asClass = <T>(provider: ClassProvider<T>) => {

    const instance: T = new provider.class as T;

    const props = this._getClassProps(provider.class);
    props.forEach((prop, k) => {
      instance[prop] = this.get(provider.imports[k]);
    });

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