/*
Medium Chaining Promise
  
Objective - Learn how to chain promise using .then() and handle errors with .catch()
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

function prepareBreakfast() {
  return new Promise((res, rej) => {
    console.log("START Preparing breakfast");
    setTimeout(() => {
      res("Toast is ready!!");
    }, 3000);
  });
}

prepareBreakfast()
  .then((value) => {
    console.log(value);
    return makeTea();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
