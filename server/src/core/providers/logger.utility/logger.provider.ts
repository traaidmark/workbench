import { Provider, ProviderType } from '@/core/services/provider'

import {LoggerInterface} from './logger.schema';

@Provider(ProviderType.Utility)
export class LoggerProvider implements LoggerInterface {
  public happy = (): void => {
    console.log('LOGGER PROVIDER SAYS HELLO!');
  }
}