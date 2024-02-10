/*
Medium Chaining Promise
  
Objective: Learn how to chain Promises using . then( and handle errors with .catch().

Task: Write a JavaScript function named prepareBreakfast that simulates preparing a breakfast consisting of tea and toast. This function should:
﻿﻿﻿ Call the makeTea function from the Easy task and wait for it to complete.
﻿﻿﻿ Then, simulate making toast, which takes 3 seconds, and resolves with the string "Toast is ready!"
﻿﻿﻿ Chain these actions so that they happen sequentially, not concurrently.
﻿﻿﻿ Catch any errors and log them to the console.
*/

function makeTea() {
  console.log("START Making Tea");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Tea is Ready");
    }, 2000);
  });
}

function makeToast() {
  console.log("START Preparing Toast");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Toast is Ready!!");
    }, 3000);
  });
}

function prepareBreakfast() {
  console.log("Preparing breakfast!!");
  makeTea()
    .then((value) => {
      console.log(value);
      return makeToast();
    })
    .then((value) => {
      console.log(value);
    })
    .catch((err) => {
      console.log(err);
    });
}

prepareBreakfast();
