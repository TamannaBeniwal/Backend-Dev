const fs = require("fs");


const command = process.argv[2];
const file1 = process.argv[3];
const file2 = process.argv[4];
const content = process.argv[5];


if (command === "read") {
  fs.readFile(file1, "utf8", function (err, data) {
    if (err) {
      console.log("Error reading file");
    } else {
      console.log(data);
    }
  });
}


else if (command === "write") {
  fs.writeFile(file1, content, function (err) {
    if (err) {
      console.log("Error writing file");
    } else {
      console.log("File written successfully");
    }
  });
}


else if (command === "copy") {
  fs.copyFile(file1, file2, function (err) {
    if (err) {
      console.log("Error copying file");
    } else {
      console.log("File copied successfully");
    }
  });
}


else if (command === "delete") {
  fs.unlink(file1, function (err) {
    if (err) {
      console.log("Error deleting file");
    } else {
      console.log("File deleted successfully");
    }
  });
}


else if (command === "list") {
  fs.readdir(file1 || ".", function (err, files) {
    if (err) {
      console.log("Error reading directory");
    } else {
      files.forEach(function (file) {
        console.log(file);
      });
    }
  });
}


else {
  console.log("Invalid command");
}
