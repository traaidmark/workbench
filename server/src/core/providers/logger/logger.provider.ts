import { AppProvider, AppProviderType } from '@/core/app'

import {LoggerInterface} from './logger.schema';

@AppProvider(AppProviderType.Base)
export class LoggerProvider implements LoggerInterface {
  public happy = (): void => {
    console.log('LOGGER PROVIDER SAYS HELLO!');
  }
}