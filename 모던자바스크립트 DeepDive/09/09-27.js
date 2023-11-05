var elem = null;

// elem이 falsy 값이면 elem으로 평가되고, elem이 truthy 값이면 elem.value로 평가된다.
var value = elem && elem.value;
console.log(value)  // null