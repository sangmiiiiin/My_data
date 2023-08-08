console.log('console.log');
console.info('console.info');
console.warn('console.warn');
console.error('console.error');
console.debug('console.debug');

const tracer = require('tracer').dailyfile({
  root: 'logs',
  level: 2
});

tracer.log('tracer.log');
tracer.info('tracer.info');
tracer.warn('tracer.warn');
tracer.error('tracer.error');
tracer.debug('tracer.debug');