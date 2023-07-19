class Bench {
  // private _container: Container;

  constructor() {
  }

  public registerModules = (): this => {
    console.log('registering modules!');
    // this._container.bind<HelloInterface>('test').to(Hello);
    return this;
  }

  public start = (): this => {
    console.log('Starting the bench app!');
    // this._hello.world()
    return this;
  }

  // PRIVATE METHODS

}

export default Bench;