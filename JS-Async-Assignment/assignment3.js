/* 
Tasks:

Write three dummy functions using only promises and only using normal callbacks,
All three functions are dummy, you don't need actual implementation. 
These dummy functions are to just represent a delay. 
 -  Write a function to download data from a url
 -  Write a function to save that downloaded data in a file and return the filename
 -  Write a function to upload the file written in previous step to a newUrl.


- THe download should take say 4sec delay, fileWrite should take 2sec delay, upload should take 3sec delay
- Write the above callbacks and use them in a manner that first download happens then writefile happens
and then upload happens
*/

function downloadFile(url) {
  return new Promise((res, rej) => {
    console.log("Start downloading form this", url);
    setTimeout(() => {
      console.log("Downloading Completed");
      let downloadData = "DummyData";
      res(downloadData);
    }, 4000);
  });
}

function writeFile(downloadedData) {
  return new Promise((res, rej) => {
    console.log("Start writing to", downloadedData, "file");
    setTimeout(() => {
      console.log("Writing Completed");
      let fileName = "writing.txt";
      res(fileName);
    }, 2000);
  });
}

function uploadFile(fileName, newURL) {
  return new Promise((res, rej) => {
    console.log("Start Uploading", fileName, "to this newUrl", newURL);
    setTimeout(() => {
      console.log("Uploading Completed");
      let uploadResponse = "Uploaded SUCCESSFULLY";
      res(uploadResponse);
    }, 3000);
  });
}

// This will create callback hell

// const downloader = downloadFile("www.google.com");
// downloader.then(
//   function fulfillHandler(downloadedData) {
//     const write = writeFile(downloadedData);
//     write.then(
//       function fulfillHandler(fileName) {
//         uploadFile(fileName, "www.drive.google.com");
//       },
//       function rejectionHandler() {}
//     );
//   },
//   function rejectionHandler(value) {
//     console.log(value);
//   }
// );

downloadFile("www.google.com")
  .then((downloadedData) => writeFile(downloadedData))
  .then((fileName) => uploadFile(fileName, "www.drive.google.com"))
  .then((value) => console.log(value));
