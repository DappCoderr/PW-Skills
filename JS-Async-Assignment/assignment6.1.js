// array of urls

var urls = ["google.com", "netflix.com", "amazon.com"];

function fetchData(data) {
  return new Promise((res) => {
    const delay = Math.floor(Math.random() * 2) + 1;
    setTimeout(() => {
      res(data);
    }, delay * 1000);
  });
}

async function fetchSequentially(urls) {
  console.log("Starting sequential fetch");
  console.time("Sequential Fetch Time");
  //   const fetch1 = await fetchData(urls[0]);
  //   //   console.log("data form", fetch1, "is fetched!!");
  //   const fetch2 = await fetchData(urls[1]);
  //   //   console.log("data form", fetch2, "is fetched!!");
  //   const fetch3 = await fetchData(urls[2]);
  //   //   console.log("data form", fetch3, "is fetched!!");
  for (entry of urls) {
    await fetchData(entry);
  }
  console.timeEnd("Sequential Fetch Time");
}

async function fetchConcurrently(urls) {
  console.log("Starting Concurrent fetch");
  console.time("Concurrent Fetch Time");
  const promise = urls.map(fetchData);
  const result = await Promise.all(promise);
  console.timeEnd("Concurrent Fetch Time");
}

fetchSequentially(urls);
fetchConcurrently(urls);

// function timeCal() {
//   console.log("Start");
//   console.time();
//   setTimeout(() => {
//     console.timeEnd();
//     console.log("End");
//   }, 5000);
// }

// timeCal();
