import LoggerService from './logger.service';

const log = new LoggerService();


const main = () => {
  // console.log('log test', log)
  console.log('environment:', process.env.NODE_ENV)
  log.info('this is an info message');
  log.warn('this is a warning message');
  log.error('this is an error message');
}

main();


