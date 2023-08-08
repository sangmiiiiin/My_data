const m1 = require('./m1');

const kim = new m1.Score(80, 90);
const lee = new m1.Score(99, 87);

console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());