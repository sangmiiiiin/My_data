// 이미 존재하는 프로퍼티에 값을 할당하면 덮어 씌워 진다

var person = {
    name: 'Lee'
};
ds
person.name = 'kim';

console.log(person.name); // kim