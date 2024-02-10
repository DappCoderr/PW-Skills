/* Solve Promise using promise-all and Async/Await

Objective: Understand how to handle multiple Promises concurrently and use async/await syntax for cleaner code.

Task: Write a JavaScript function named prepareFullBreakfast that simulates preparing a full breakfast of eggs, toast, and tea concurrently. This function should:
﻿﻿ Have three separate functions that return Promises for making eggs (makeEggs ), making toast (makeToast), and making tea ( makeTea.). Each function should resolve after a random delay between 1 to 5 seconds, simulating the unpredictable nature of cooking times.
﻿﻿ Use Promise. all to wait for all three components of the breakfast to be ready.
﻿﻿ After all components are ready, log "Full breakfast is ready!" to the console.
﻿﻿ Use async/await syntax for cleaner code and error handling.

Criteria for Success:
﻿﻿ Properly implement makeEggs, makeToast, and reuse makeTea with random delays.
﻿﻿ Use Promise. all to handle concurrent Promise execution.
﻿﻿ Use async/await syntax for handling asynchronous code.
﻿﻿ Catch and log any errors.
*/

function makingEgg() {
  return new Promise((res) => {
    console.log("START preparing Egg");
    // Creating a random delay between 1 to 5
    const delay = Math.floor(Math.random() * 5) + 1;
    setTimeout(() => {
      const value = "Egg is Ready!!";
      res(value);
    }, delay * 1000);
  });
}

function makingTea() {
  console.log("START preparing Tea");
  // Creating a random delay between 1 to 5
  const delay = Math.floor(Math.random() * 5) + 1;
  return new Promise((res) => {
    setTimeout(() => {
      res("Tea is Ready!!");
    }, delay * 1000);
  });
}

function makingToast() {
  console.log("START preparing Toast");
  // Creating a random delay between 1 to 5
  const delay = Math.floor(Math.random() * 5) + 1;
  return new Promise((res) => {
    setTimeout(() => {
      res("Toast is Ready!!");
    }, delay * 1000);
  });
}

async function prepareFullBreakfast() {
  try {
    const [eggResult, teaResult, toastResult] = await Promise.all([
      makingEgg(),
      makingTea(),
      makingToast(),
    ]);
    console.log("Full Breakfast is Ready!!!");
    console.log(eggResult);
    console.log(teaResult);
    console.log(toastResult);
  } catch (err) {
    console.log(err);
  }
}

prepareFullBreakfast();
