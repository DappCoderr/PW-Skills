// Write three dummy functions without using promises and only using normal
// callbacks, All three functions are dummy, you don't need actual implementation.
// These dummy functions are to just represent a delay.

// Write a function to download data from a url
function downloader(url, cb) {
  // Anyone who wants to download something first and then execute something else can use this function
  console.log("Start downloading form", url);
  setTimeout(() => {
    console.log("Downloading completed");
    let downloadedData = "Dummy data";
    cb(downloadedData);
  }, 4000);
}

// Write a function to save that downloaded data in a file and return the filename
function writeFile(data, cb) {
  console.log("Start writing file into", data);
  setTimeout(() => {
    console.log("Writing completed");
    cb();
  }, 2000);
}

// Write a function to upload the file written in previous step to a new url
function uploadFile(fileName, newUrl, cb) {
  console.log(
    "Start Uploading file to ",
    newUrl,
    " with a new fileName",
    fileName
  );
  setTimeout(() => {
    console.log("Uploading completed");
    let uploadResponse = "SUCCESS";
    cb(uploadResponse);
  }, 3000);
}

console.log("Starting the program");

downloader("www.google.com", (downloadData) => {
  writeFile(downloadData, (fileName) => {
    uploadFile(fileName, "www.drive.google.com", (uploadResponse) => {
      console.log("Status of Uploading", uploadResponse);
    });
  });
});

// THe download should take say 4sec delay,
// file write should take 2sec delay,
// upload should take 3sec delay

// Write the above callbacks and use them in a manner that first download
// happens then writefile happens and then upload happens
