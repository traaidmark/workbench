import { AppOptions } from '@/core/app';

import api from './api.config';

const config: AppOptions = {
  env: process.env.NODE_ENV,
  api
};

export default config;