import bodyParser from 'body-parser';
import express from 'express';

import { ApiOptions } from '@/core/services/api';

const ApiOptions: ApiOptions = {
  port: 4000,
  route: '',
  middleware: [
    express.static('public'),
    bodyParser.json(),
  ],
}

export default ApiOptions;