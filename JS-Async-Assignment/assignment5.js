/*
Basic Promise Usage
Objective - Understand how to create and use a promise
*/

function makeTea() {
  console.log("START Tea Making");
  return new Promise((res, rej) => {
    console.log("Wait Tea is preparing");
    setTimeout(() => {
      res("Tea is Ready");
    }, 2000);
  });
}

makeTea().then(function fulfilledHandler(value) {
  console.log(value);
});
