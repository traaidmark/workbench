
import { injectable, decorate } from 'inversify';

import { SystemMeta, ModuleMetaInterface, MetaType} from '@/workshop/lib';

const meta:string = SystemMeta.DecoratorModule;

export function Module(providers: ModuleMetaInterface) {
  return function(target: NewableFunction): void {

    console.log(meta, providers);

    const currentMeta: ModuleMetaInterface = providers;

    // // // decorate(injectable(), currentData.controller);
    Reflect.defineMetadata(MetaType.Module, currentMeta, target);

    const previousMeta: ModuleMetaInterface[] = Reflect.getMetadata(
      MetaType.Module,
      Reflect,
    ) || [];

    // const metaArray = [currentMeta, ...previousMeta];

    // Reflect.defineMetadata(
    //   MetaType.Module,
    //   metaArray,
    //   Reflect,
    // );

  }
}