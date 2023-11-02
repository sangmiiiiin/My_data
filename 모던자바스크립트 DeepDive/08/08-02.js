var num = 0;
var kind;

// if 문
if (num > 0) {
    kind = '양수';  // 음수를 구별할 수 없다
}

console.log(kind);

// if...else문
if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}

console.log(kind);

// if...else if 문
if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}

console.log(kind);