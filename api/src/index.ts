import 'reflect-metadata';
import 'module-alias/register';
import { Container } from 'inversify';

import { Server, WorkshopContainer } from '@/workshop';
import { serverOptions } from '@/app/config';

import '@/app/routes';

let container = new WorkshopContainer(new Container()).init();

let server = new Server(container, serverOptions);

let appServer = server.build()

appServer.listen(serverOptions.port, () => {
  console.log(`App listening on the port ${serverOptions.port}`);
});