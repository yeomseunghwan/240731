// 순회할 수 있는 객체
// • 배열, 문자열, Set, Map
// • for…of 문을 사용할 수 있다.
// • 스프레드 오퍼레이터 (확산 연산자)를 사용하여 배열을 초기화 할 수 있다.
// • 가변 인수를 갖는 함수를 호출할 때 인수로 전달할 수 있다.

// 이터레이터와 제너레이터
// • JavaScript에서 데이터 구조를 순차적으로 탐색하고, 특히 비동기 프로그래밍 및 메모리 관리에서 유용합니다.
// • 이터레이터는 데이터 구조를 순회할 수 있는 방법을 제공하고, 필요한 만큼 데이터를 처리할 수 있게 해줍니다.
// • 제너레이터는 상태를 유지하면서 데이터를 생성할 수 있는 유연성을 제공하며, 비동기 작업을 더 쉽게 처리할 수
// 있게 해줍니다

// 이터레이터
// • 이터레이션 결과를 반환하는 next() 메서드를 갖는 객체이다.
// • 이터레이션 결과는 done 과 value 속성을 갖는 객체
// • done ­ 아직 순회할 수 있는 요소가 남아있는 지 여부 => true(없다), false(남아 있다)
// • value ­ 요소가 남아있다면 어떤 요소인지 반환 => 순환할 수 있는 현재 요소

// let arr = [1, 2, 3, 4, 5]; // [symbol.iterator] () 메서드를 호출하여 이터레이터 객체를 구할 수 있다.
// let iterator = arr[Symbol.iterator]();
// // 이터레이션 결과 객체 반환
// console.log(iterator);
// let result = iterator.next();
// console.log(result);
// // 배열 요소를 순회하며 요소의 값 출력
// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }
// // 이터레이터 객체로 배열을 초기화
// let copy = [...iterator];
// console.log(copy);

// 이터레이터
// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }
//   [Symbol.iterator]() {
//     let next = this.from;
//     return {
//       next: () => {
//         if (next <= this.to) {
//           let result = { value: next, done: false };
//           next += this.interval;
//           return result;
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   }
// }
// let evenNumbers = new Sequence(2, 10, 2);
// let iterator = evenNumbers[Symbol.iterator]();
// let result = iterator.next();
// console.log(result);

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// for (let num of evenNumbers) {
//   if (num > 7) break;
//   console.log(num);
// }

// 제너레이터
// • 제너레이터는 일련의 값을 생성하는 특별한 종류의 순회할 수 있는 객체이다.
// • 배열처럼 이미 객체에 포함되어 있는 요소들을 순회하는 것이 아니라 어떤 연산의 결과로 생성된 값을 순회할 때 유
// 용하다.
// • function* 예약어로 정의된다.
// function* generate() {
//   console.log("제너레이터 실행");
//   console.log("1생성");
//   yield 1;
//   console.log("2생성");
//   yield 2;
//   console.log("3생성");
//   yield 3;
// } // 제너레이터 함수는 일반 함수와 달리 호출 할 때 즉시 실행 되지 않는다.
// let gen = generate();
// let result = gen.next();
// result = gen.next();
// yield문은 이터레이터의 next() 메서드가 호출될 때 값을 반환한다.

// // while 문
// while (!result.done) {
//   console.log(result.value);
//   result = gen.next();
// }

// for...of문
// for (let ge of gen) {
//   console.log(gen);
// }

// // [Symbol.iterator]() 메서드를 호출하여 이터레이터를 가져 올 수 있다.
// let iterator = gen[Symbol.iterator]();
// console.log(iterator);
// function* sequence(from = 0, to = Infinity, interval = 1) {
//   // function* << 제너레이터 함수
//   let next = from;
//   while (next <= to) {
//     yield next;
//     next += interval;
//   }
// }

// // 짝수만 생성하는 제너레이터 객체 생성
// let evenSeq = sequence(2, 10, 2);
// for (let seq of evenSeq) {
//   console.log(seq);
// }

// // 홀수만 생성하는 제너레이터 객체 생성
// let oddSeq = sequence(1, 10, 2);
// for (let seq of oddSeq) {
//   console.log(seq);
// }

// 제너레이터
//• [Symbol.iterator]() 메서드를 제너레이터 메서드로 구현하여 제너레이터 객체를 반환
class Sequence {
  constructor(from = 0, to = Infinity, interval = 1) {
    this.from = from;
    this.to = to;
    this.interval = interval;
  }
  *[Symbol.iterator]() {
    let num = this.from;
    while (num <= this.to) {
      yield num;
      num += this.interval;
    }
  }
}

// let evenNumbers = new Sequence(2, 10, 2); // 짝수만 반환
// for (const num of evenNumbers) {
//   console.log(num);
// }
function* gernerateInterables(...iterables) {
  for (let iterable of iterables) {
  }
  for (let item of iterables) {
    yield item;
  }
}
function* gernerateInterables(...iterables) {
  for (let iterable of iterables) yield* iterable;
}
// let evenNumbers = new Sequence(2, 10, 2); // 짝수만 반환
let generator = gernerateInterables("abc", [1, 2, 3]);
let arr = [...generator];
console.log(arr);
