
import { injectable, decorate } from 'inversify';

import { SystemMeta, ModuleInterface, MetaType} from '@/workshop/lib';

const meta:string = SystemMeta.DecoratorModule;

export function Module(module: ModuleInterface) {
  return function(target: NewableFunction): void {

    console.log(meta, module);

    const currentMeta: ModuleInterface = module;

    // // decorate(injectable(), currentData.controller);
    Reflect.defineMetadata(MetaType.Module, currentMeta, target);

    const previousMeta: ModuleInterface[] = Reflect.getMetadata(
      MetaType.Module,
      Reflect,
    ) || [];

    const metaArray = [currentMeta, ...previousMeta];

    Reflect.defineMetadata(
      MetaType.Module,
      metaArray,
      Reflect,
    );

  }
}