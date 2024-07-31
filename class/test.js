// 예제 1
// Book 이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하세요.
// (title,author,price) / 생성할 프로토타입 예 ) 출판일,페이지 수

// class Person {
//  // 생성자
//   constructor(name) {
//     this.name = name;
//   }
//  // 프로토타입
//   sayHi() {
//     console.log(`Hi ${this.name}`);
//   }
//  // 정적메서드
//   static sayHello() {
//     console.log("Hello");
//   }
// }
// const me = new Person("Lee");
// me.sayHi();
// Person.sayHello();

// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayHi = function () {
//     console.log("Hi" + this.name);
//   };
//   Person.sayHello = function () {
//     console.log("Hello");
//   };
//   return Person;
// })();
// const me = new Person("Lee");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

class Book {
  // 생성자
  constructor(title) {
    this.title = title;
  }
  // 프로토타입
  title() {
    console.log(``);
  }
}
