var person = {
    name: 'Lee',
};

// 프로퍼티 값 갱신
person.name = 'Kim';

// 프로퍼티 값 동적 생성
person.age = 20;

// 프로퍼티 값 삭제
delete person.age;

console.log(person);