import 'reflect-metadata';
import 'module-alias/register';

import { Provider } from '@/app/tools';

import { apiTransportProvider } from './app/providers/transport/transport.api';

import { userProviders } from '@/modules/user';

const appModule: Provider[] = [
  ...userProviders,
  apiTransportProvider,
];

export default appModule;