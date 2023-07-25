import { Provider } from '@/app/tools/ioc';

import { userProviders } from './user';

const moduleProviders: Provider[] = [
  ...userProviders,
];

export default moduleProviders;