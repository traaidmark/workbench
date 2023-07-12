import 'reflect-metadata';
import 'module-alias/register';
import 'dotenv/config';

import { ProviderService } from '@/core';

import '@/app';

new ProviderService().start();