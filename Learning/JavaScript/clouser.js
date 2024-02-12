var createCounter = function (n) {
  let counter = n;
  return function () {
    return counter++;
  };
};

console.log(createCounter(10));
