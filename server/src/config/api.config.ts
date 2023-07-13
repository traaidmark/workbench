import bodyParser from 'body-parser';

import { ApiOptions } from '@/core/services/api';

const ApiOptions: ApiOptions = {
  port: 4000,
  route: '',
  middleware: [
    bodyParser.json(),
  ],
}

export default ApiOptions;