import 'reflect-metadata';
import 'module-alias/register';

// import { Container, Provider, ValueProvider } from 'files/tools';

import { UserControllerInterface, UserModule } from '@/app-modules/user';

// // OLD SHIT WAY

// interface Config {
//   port: number
// }

// const config: ValueProvider<Config> = {
//   token: 'Config',
//   type: 'config',
//   value: {
//     port: 4000,
//   }
// }

// const providers: Provider[] = [
//   ...UserModule,
//   config
// ]

// // CREATE CONTAINER

// const ioc = new Container();

// // BIND SHIT UP NOW

// ioc.bindMany(providers);

// // LIST ALL BOUND

// // console.log('Registered Providers: ',ioc.listAll());

// const ctrl = ioc.get<UserControllerInterface>('UserController');
// const ctrl2 = ioc.get<UserControllerInterface>('UserController');
// const config1 = ioc.get<Config>('Config');
// const config2 = ioc.get<Config>('Config');


// if (config1 === config2) {
//   console.log('Config is a singleton');
// } else {
//   console.log('Config is transient');
// }

// if (ctrl === ctrl2) {
//   console.log('CTRL is a singleton');
// } else {
//   console.log('CTRL is transient');
// }

// console.log('DATA FROM CTRL: ', ctrl.fetchAll());
