// 프로퍼티 삭제

// delete 연산자는 객체의 프로퍼티를 삭제한다. 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이여야 한다
// 만약 존재하지않는 프로퍼티를 삭제하면 아무 에러 없이 무시된다.

var person = {
    name: "Lee",
}

// 동적 프로퍼티 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제 가능.
delete  person.age;

console.log(person);

// person 객체에 address 프로퍼티는 존재하지 않는다.
// address 프로퍼티를 삭제할 수 없으며 아무런 에러가 발생하지 않는다.
delete person.address;

console.log(person);


