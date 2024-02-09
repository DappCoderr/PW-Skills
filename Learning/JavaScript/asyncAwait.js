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

//   downloadFile("www.google.com")
//     .then((downloadedData) => writeFile(downloadedData))
//     .then((fileName) => uploadFile(fileName, "www.drive.google.com"))
//     .then((value) => console.log(value));

async function execute() {
  console.log("Starting execute function");
  const downloaderData = await downloadFile("www.google.com");
  const writeFileData = await writeFile(downloaderData);
  const uploadData = await uploadFile(writeFileData, "www.drive.google.com");
  console.log(uploadData);
}

console.log("START");
execute();
console.log("END");
