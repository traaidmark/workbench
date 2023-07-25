import 'reflect-metadata';
import 'module-alias/register';

import { Provider, ValueProvider } from '@/app/tools';

import { userProviders } from '@/modules/user';

// // OLD SHIT WAY

// interface Config {
//   port: number
// }

// const config: ValueProvider<Config> = {
//   token: 'Config',
//   type: 'config',
//   value: {
//     port: 4000,
//   }
// }

const appModule: Provider[] = [
  ...userProviders,
];

export default appModule;