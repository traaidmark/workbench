import { ApiControllerMeta, IApiMeta } from '../api.schema';

export class ApiMeta implements IApiMeta {
  private url: string;
  private controllers: ApiControllerMeta[];
  
  constructor(
    url: string,
  ) {
    this.url = url;
    this.controllers = [];
  }

  public report = () => {
    console.log(`[API SERVICE]: Running on ${this.url}`);
    console.log(`[API SERVICE]: `);
    console.log(`[API SERVICE]: Available Modules: {`);
    console.log(`[API SERVICE]: `);
    this.controllers.forEach(c => {
      console.log(`[API SERVICE]: - ${c.key}`);
      c.endpoints.forEach(e => {
        console.log(`[API SERVICE]: - [${e.method.toUpperCase()}]: ${c.path}${e.path}`);
      });
      console.log(`[API SERVICE]: `);
    });
    
    console.log(`[API SERVICE]: }`);
  }

  public add = (c: ApiControllerMeta):void => {
    this.controllers.push(c);
  }

}