// 동기/비동기
// 동기: 대답을 기다리는 것
// 동기: 해당 작업이 끝날 때까지 다른 작업을 시작하지 않고 해당 작업이 다 끝난 뒤 새로운 작업을 시작하는 방식
// 비동기: 하나의 작업이 끝나기 전에 다른 새로운 작업을 시작할 수 있다. 병렬로 작업

// 동기 프로그래밍은 코드를 순차적으로 실행한다.
// 단점- 앞선 작업이 완료되지 않으면 뒤에 모든 작업이 이루어지지 않음
// 비동기: 작업이 실행되는 동안 다른 작업들 작업이 이루어짐

// 콜백 함수, 프로미스, async와 await 로 비동기식 코드를 작성할 수 있다.
// 콜백 함수는 다른 함수의 인자로 넘겨지고, 해당 함수가 처리된 후 호출되는 함수
// 콜백 함수 : 다른 함수에서 조건이 충족되거나 이벤
// 트가 발생할 때 호출되도록 전달되는 함수

// 콜백 함수 : 다른 함수에서 조건이 충족되거나 이벤
// 트가 발생할 때 호출되도록 전달되는 함수
// function callback() {
//   console.log("콜백함수가 호출됨");
// }
// setTimeout(callback, 1000);
// console.log("작업을 수행함");

// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { name: "Kim", email: "Kim@gamil.com" },
//       { name: "Lee", email: "Lee@gamil.com" },
//       { name: "Park", email: "Park@gamil.com" },
//     ]);
//   }, 1000);
// }

// function findUser(name, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.name === name);
//     callback(user.email);
//   });
// }
// let user = findUser("Kim", (user) => {
//   console.log(user);
// });

// 이벤트 핸들러로서 콜백 함수
// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", sayHello);
// function sayHello() {
//   alert("안녕하세요");
// }

// 비동기
// 비동기식 처리가 많아질수록 코드가 복잡해지고 이해하기 어려워진다.
// 콜백 지옥 ­ 여러 코드 블록을 차례로 연결해 작성할 때 발생하는 상황

// Promise
// 비동기 연산의 결과를 표현하는 객체 (최종 성공 또는 실패를 나타냄)
// • 작업 중 (pending) ­비동기 연산이 진행 중
// • 완료됨 (fulfilled) ­ 비동기 연산의 결과에 따라 나타나는 상태
// • 거부됨(rejected) ­ 비동기 연산의 결과에 따라 나타나는 상태

// Promise
// • resolve: 정상적인 결과 값을 반환
// • reject: 정상적이지 않았던 값을 반환
// • promise 객체가 반환하는 값을 구하기 위해서는 then() 메서드를 사용한다. 두 개의 콜백 함수를 인수로 받는다.
// • 두번째 인수에는 거부됨 상태를 처리하는 함수를 지정한다. 두 인수는 선택적이며 두 번째 인수를 생략할 수 있다.
// • catch() 메서드를 사용하여 거부됨 상태만 처리할 수 있다.

// Promise
// Promise() 생성자 함수는 비동기 연산을 수행하는 콜백 함수를 인수로 받아들인다
// let success = true;
// function getUser() {
//   return new Promise((resolve, reject) => {
//     if (success) {
//       setTimeout(() => {
//         // 시물레이션을 위해 setTimeout을 이용함
//         resolve(
//           // 콜백함수에 인자로 받는것
//           { name: "Kim", email: "Kim@gamil.com" },
//           { name: "Lee", email: "Lee@gamil.com" },
//           { name: "Park", email: "Park@gamil.com" }
//         );
//       }, 1000);
//     } else {
//       reject("실패");
//     }
//   });
// }
// // Promise
// // then(), catch() 를 함께 사용할 수 있고, 완료됨과 거부됨 상태일 때 모두 처리해야 하는 콜백 함수를 실행할 수 있다
// let promise = getUser();
// promise
//   .then((users) => users.find((user) => user.name === "Kim"))
//   .then((user) => console.log(user.email))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("작업완료"));

// Promise
// then() 메소드는 체인으로 연결 가능

// 병렬 Promise
// 여러 비동기 연산을 병렬로 동시에 수행하고 각 비동기 연산의 결과를 하나로 모으는 작업을 수행할 수 있다
// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(10), 2000)
// );
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(20), 1000)
// );
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(30), 3000));
// let promises = [p1, p2, p3];

// Promise.allSettled(promises).then((results) => {
//   const fulfilledResults = results
//     .filter((result) => result.status === "fulfilled")
//     .map((result) => result.value);
//   const total = fulfilledResults.reduce((sum, value) => sum + value);
//   console.log(`결과 : ${fulfilledResults}`);
//   console.log(`합계 : ${total}`);
// });

// 병렬 Promise
// .allSettled는 실행을 완료하기를 기다렸다가 객체를 반환한다.

// 순차 Promise
// 순차적으로 실행할 수 있다.
// then() 메서드 체인을 이용하여 비동기 연산을 수행하는
// 가 함수를 순차적으로 실행할 수 있다

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "kim@gmail.com" },
//         { name: "lee", email: "lee@gmail.com" },
//         { name: "park", email: "park@gmail.com" },
//       ]);
//     }, 2000);
//   });
// }
// function findUser(users) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === "Kim"));
//     }, 1000);
//   });
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     console.log(user);
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000);
//   });
// }
// getUser().then(findUser).then(getEmail).then(console.log);

// 프로미스란 : 성공 또는 실패 결과를 나타내는 객체... 너무 어렵다 진짜아아아아아아

// 예제2
//  1초 후에 "A를", 2초 후에 "B"를 반환하는 두 개의 Promise를 생성하고, 두 Promise가 모두 완료된 후에 "완료!"를 출력하세요.
// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A완료");
//   }, 1000);
// });
// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("B완료");
//   }, 2000);
// });
// let promises = [promiseA, promiseB];
// Promise.all(promises).then((results) => {
//   console.log("완료", results);
// });

// 예제3
// 1초 후에 숫자 5를 반환하는 Promise와 1.5초 후에 그 숫자에 10을 곱한 값을 반환하는 Promise를 작성하세요.
// 만약 5를 반환하는 Promise가 실패하면 "에러!"를 출력하세요.

// let success = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (success) {
//       resolve(5);
//     } else {
//       reject("에러");
//     }
//   }, 1000);
// });

// promise.then((num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num * 10);
//     }, 1500);
//   });
// });
// .then(result => {
//   console.log(result);
// })
// .catch(error => {
//     console.log(error);
// })

// async와 await
// 비동기식 코드를 마치 동기식 코드인 것처럼 읽기 쉽도록 작성.
// async, await 예약어를 사용

// async와 await
// async : 비동기 연산을 처리하는 함수를 정의하는데 사용
// • function 앞에 쓴다.
// • 함수 표현식
// • 화살표 함수
// • 클래스 메서드
// • 명시적으로 Promise 객체를 반환할 수 있다.

// async와 await
// async : 비동기 연산을 처리하는 함수를 정의하는데 사용
// async function sayHello() {
//   return "안녕";
// }
// sayHello().then(console.log);

// let sayHello = async function () {
//   return "안녕";
// };
// sayHello().then(console.log);

// let sayHello = async () => "안녕";
// sayHello().then(console.log);

// async와 await
// async : 비동기 연산을 처리하는 함수를 정의하는데 사용

// class Greeter {
//   async sayHello() {
//     return "안녕";
//   }
// }
// const greeter = new Greeter();
// greeter.sayHello().then(console.log);

// async function sayHello() {
//   return Promise.resolve("안녕");
// }
// sayHello().then(console.log);

// async function sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("안녕"));
//   });
// }
// sayHello().then(console.log);

// async와 await
// await :Promise 객체가 완료됨 상태가 되거나 거부됨 상태가 될 때까지 기다릴 수 있다.
// 항상 async 예약어가 지정된 함수 안에서만 사용해야 한다.

// async function sayHello() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("거부");
//     }, 3000);
//   });
// }

// async function display() {
//   try {
//     let result = await sayHello();
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
//   let result = sayHello();
//   console.log(result);
// }
// display();

// 순차적 프로미스처럼 만들기
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "kim@gmail.com" },
//         { name: "lee", email: "lee@gmail.com" },
//         { name: "park", email: "park@gmail.com" },
//       ]);
//     }, 2000);
//   });
// }
// function findUser(users, name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === name));
//     }, 1000);
//   });
// }
// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000);
//   });
// }

// async function getUserEmail(name) {
//   let users = await getUser();
//   let user = await findUser(users, name);
//   let email = await getEmail(user);
//   return email;
// }

// async function displayUserEmail() {
//   let email = await getUserEmail("Kim");
//   console.log(email);
// }
// displayUserEmail();

// 제너레이터와 프로미스
// 제너레이터와 프로미스를 함께 사용하여 마치 동기 코드처럼 느껴지게 비동기 코드를 작성할 수 있다.
// const myPromise = () =>
//   new Promise((resolve) => {
//     resolve("value is");
//   });
// function* gen() {
//   let result = "";
//   yield myPromise().then((data) => {
//     result = data;
//   });
//   yield result + "1";
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//   console.log(asyncFunc.next());
// });

// 제너레이터와 프로미스
// 제너레이터와 프로미스를 함께 사용하여 마치 동기 코드처럼 느껴지게 비동기 코드를 작성할 수 있다.
// function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout = 1000) {
//   let next = from;
//   while (next <= to) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => resolve(next), timeout);
//     });
//     next += interval;
//   }
// }
// (async () => {
//   let seq = asyncSequence(2, 10, 2); // 즉시 실행함수 표현식과 for await of문 사용
//   for await (let value of seq) console.log(value);
// })();

// 예제4
// 제너레이터를 사용하여 여러 비동기 작업을 순차적으로 실행하는 함수를 작성하세요. 각 작업은 2초 후에완료된다고
// 가정하고, 작업이 완료될 때마다 그 결과를 출력해야 합니다. 제너레이터는 작업이 완료될 때마다 다음 작업을 실행해야 합니다.......

// function* taskGenerator() {
//   yield new Promise((resolve) => setTimeout(() => resolve("1완료"), 2000));
//   yield new Promise((resolve) => setTimeout(() => resolve("2완료"), 2000));
//   yield new Promise((resolve) => setTimeout(() => resolve("3완료"), 2000));
// }

// const tasksDisplay = async () => {
//   const tasks = taskGenerator();
//   for (let task of tasks) {
//     const result = await task;
//     console.log(result);
//   }
// };
// tasksDisplay();

// 예제1
// 사용자 정보를 가져오는 비동기 함수를 작성하고, 이를 async/await를 사용하여 호출하시오
// const users = {
//   1: { name: "kim", age: 25 },
//   2: { name: "Lee", age: 30 },
//   3: { name: "Jung", age: 35 },
// };

function userData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "A", age: 25 },
        1: { name: "B", age: 30 },
        1: { name: "C", age: 28 },
      };
      const user = users(userId);
      if (user) {
        resolve(user);
      } else {
        reject("사용자를 찾을 수 없습니다.");
      }
    }, 1000);
  });
}
async function getUser(userId) {
  try {
    const userDataGet = await userData(userId);
    console.log(`${userDataGet.name}, ${userDataGet.age}`);
  } catch (error) {
    console.error(error);
  }
}
getUser(4);
