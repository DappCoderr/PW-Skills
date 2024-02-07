// Creating & Consuming Promise
// using .then, throw, .catch for handling registration & rejection.

function createPromise(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(time);
    }, time);
  });
}

createPromise(10000)
  .then(
    function f(value) {
      console.log("p1 fulfilled and Value of p1", value);
      return value * 2;
    },
    function r1(value) {
      console.log("p1 rejected and Value of p1", value);
      return value * 2;
    }
  )
  .then(
    function g(value) {
      console.log("p2 fulfilled and Value of p2", value);
      throw value * 3;
    },
    function r2(value) {
      console.log("p2 rejected and Value of p1", value);
      return value * 2;
    }
  )
  .then(
    function h(value) {
      console.log("p3 fulfilled and Value of p3", value);
      return value * 4;
    },
    function r3(value) {
      console.log("p3 rejected and Value of p1", value);
      return value * 2;
    }
  );
