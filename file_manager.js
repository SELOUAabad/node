const fs = require("fs");

fs.appendFile("welcome.txt", "hello node", "utf-8", (error, data) => {
  if (error) {
    console.log("i have an error");
    console.log(error);
  } else {
    console.log("file added");
  }
});

fs.readFile("welcome.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("i have an error");
    console.log(error);
  } else {
    console.log(data);
  }
});
