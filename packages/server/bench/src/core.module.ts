import { Provider } from 'ioc-container';

import { loggerCoreProvider } from '@/app/providers/core/core.logger';

const coreProviders: Provider[] = [
  loggerCoreProvider,
];

export default coreProviders;