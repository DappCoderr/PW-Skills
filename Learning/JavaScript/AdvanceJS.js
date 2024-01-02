console.log("JS Callback");

function processArray(array, simple) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `index ${i} value ${array[i]} return value of simple ${simple(array[i])}`
    );
  }
}

processArray([4, 3, 1, 2, 7, 9, 5], function cure(x) {
  return x * x * x;
});

console.log("Use of IIFE");

function declarationOfNamesInDB() {
  console.log("SeniorDev changes");
}

declarationOfNamesInDB();
// 8000 line....

// function declarationOfNamesInDB() {
//   console.log("Intern code");
// }

(function () {
  function declarationOfNamesInDB() {
    console.log("Intern changes");
  }
  console.log("Intern Code!!");
  declarationOfNamesInDB();
})();

console.log("Chaining of function");
