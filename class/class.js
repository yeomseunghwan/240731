// 클래스와 프로토타입
// 클래스는 프로토타입 객체에서 속성을 상속하는 객체의 집합이다.
// 같은 프로토타입 객체에서 속성을 상속했다면 이들 객체는 같은 클래스의 서로 다른 인스턴스가 된다.
// 인스턴스 객체가 프로토타입을 참조하며, 이를 통해 프로토타입에 정의된 속성과 메소드를 상속받는다.
// ES6에서 class 예약어로 클래스를 생성할 수 있는 방법 제공, 프로토타입이 그 중심에 있다.

// 팩토리함수 / Object.create() 메서드를 사용하여 객체를 생성
// 생성자 함수로 구현
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype = {
//   toString: function () {
//     return `(${this.x}, ${this.y})`;
//   },
// };
// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// 프로토타입으로부터 상속된 toString()
// 메서드를 호출하여 객체에 대한 정보를 문자열로 출력할 수 있다.
// console.log(pt1 instanceof Point);
// console.log(pt2 instanceof Point);
// pt1,pt2 두 객체는 Point 클래스의 인스턴스이다.

// 클래스 / 생성자 함수
// 객체가 생성될 때마다 메서드가 별도로 생성된다. 각각의 인스턴스에 대해 독립적으로 정의된다.
// 각 메서드는 메모리에서 서로 다른 주소를 가지므로 각각의 인스턴스는 서로 다른 객체를 참조한다.
// 메서드를 공유하게 해주면 된다.
// function Circle(radius) {
//   this.radius = radius;
//   this.getArea = function () {
//     return Math.PI * this.radius ** 2;
//   };
// }

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// 클래스 / 생성자 함수
// 클래스와 생성자 함수는 모두 프로토타입 기반의 인스턴스를 생성하지만 완벽하게 동일하게 동작하지 않
// 는다. 클래스는 생성자 함수보다 엄격하며 생성자 함수에서는 제공하지 않는 기능도 제공한다.
// 클래스는 생성자 함수 기반의 객체 생성 방식보다 견고하고 명료하다. (super, extends)
// 생성자 함수는 함수 안에서 객체를 생성하지 않는다. this를 사용하여 함수 객체 자신에 속성을 추가하고 초기화한다.
// 함수의 프로토타입 속성에 프로토타입 객체를 저장한다.

// 인스턴스 생성
// 클래스는 함수다.
// 클래스 몸채에서 정의할 수 있는 메서드는
// constructor(생성자), 프로토타입 메서드, 정적메서드 3가지

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

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
//   static areas(width, height) {
//     return width * height;
//   }
// }
// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(20, 10));

// const Person = {
//   firstName: "SeungHwan",
//   lastName: "Yeom",

//   get fullName() {
//     return `${this.firstName}, ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split("");
//   },
// };
// console.log(Person.fullName);

// 클래스 필드
// 클래스 몸채에서 필드를 정의하는 경우 this 에 바인딩해서는 안된다.
// constructor 내에서는 this에 바인딩
// 클래스 필드를 초기화할 필요가 있다면 constructor 내부에서 클래스 필드를 참조하여 초기값을 할당한다.

// public / private
// private 필드 #name 은 클래스 외부에서 참조할 수 없다.
// class Person {
//   #name = "";
//   constructor(name) {
//     this.#name = name;
//   }
//   get name() {
//     return this.#name.trim();
//   }
// }
// const me = new Person("Lee");
// console.log(me.name);
// 클래스 외부에서 참조할 수 없다.
// 접근자 프로퍼티를 이용하여 참조 가능!

// 상속에 의한 확장
// extends / 기존 클래스를 상속받아 새로운 클래스를 확장하여 정의
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }
// const myVehicle = new Vehicle("자전거", 2);
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }
// const myBicycle = new Bicycle("따릉이", 2);
// console.log(myBicycle);

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }
// const myCar = new Car("벤츠", 4, true);
// console.log(myCar);

// super
// super 키워드는 함수처럼 호출할 수 있고 this와 같이 식별자처럼 참조할 수 있다.

// class Base {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `Hi ${this.name}. 잘 지냈니?`;
//   }
// }

// class Derived extends Base {
//   sayHi() {
//     return `${super.sayHi()}`;
//   }
// }
// const derived = new Derived("Lee");
// console.log(derived.sayHi());

// 예제 1
// Book 이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하세요.
// (title,author,price) / 생성할 프로토타입 예 ) 출판일,페이지 수
// function Book(title, author, price) {
//   (this.title = title), (this.author = author), (this.price = price);
// }
// Book.prototype.year = "1999";
