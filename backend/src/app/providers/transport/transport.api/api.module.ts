import { AppProviderType } from '@/app/lib';
import { ClassProvider, Provider } from '@/app/tools/ioc';

import ApiTransport from './api.service';

export const apiTransportProvider: ClassProvider<ApiTransport> = {
  token: 'ApiTransport',
  type: AppProviderType.Transport,
  class: ApiTransport,
  asSingleton: true,
};