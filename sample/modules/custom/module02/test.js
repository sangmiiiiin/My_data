const m1 = require('./m1');
console.log(typeof m1, m1.name, m1.type);

const m2 = require('./m2');
console.log(typeof m2, m2());
const m22 = require('./m2')();
console.log(m22);

const m3 = require('./m3');
const kim = m3({ kor: 100, eng: 90 });
const lee = m3({ kor: 56, eng: 87 });
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());

// const logger = require('./m5')();
// const logger = require('./m5')({ target: 'file', filename: 'output.log' });
const logger = require('./m5')({ target: 'file' });

logger.log('작업 시작.');
logger.error('에러 발생...');
logger.log('작업 종료.');