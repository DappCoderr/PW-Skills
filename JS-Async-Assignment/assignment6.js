function fetchData(inputArray) {
  return new Promise((res) => {
    setTimeout(() => {
      const array = inputArray;
      res(array);
    }, 2000);
  });
}

// First Try!!

// function analyzeData(arrayData) {
//   return new Promise((res, rej) => {
//     let sum = 0;
//     arrayData.forEach((element) => {
//       sum += element;
//     });
//     const average = sum / 2;
//     if (arrayData.every((element) => element > 0)) {
//       res({sum, average});
//     } else {
//       rej("Array contains negative value");
//     }
//   });
// }

// New****
function analyzeData(arrayData) {
  return new Promise((res, rej) => {
    if (arrayData.every((element) => element > 0)) {
      const sum = arrayData.reduce((acc, value) => acc + value, 0);
      const average = sum / arrayData.length;
      res({ sum, average });
    } else {
      rej("Array contains negative value");
    }
  });
}

async function processData(array) {
  try {
    const getData = await fetchData(array);
    const result = await analyzeData(getData);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

let inArray = [4, 5, 6, 2, -1, 8, 9, 3];
processData(inArray);
