const fs = require("fs");

function countFileLines(filePath) {
  return new Promise((resolve, reject) => {
    let lineCount = 0;
    // eslint-disable-next-line no-undef
    fs.createReadStream(filePath)
      .on("data", (buffer) => {
        let idx = -1;
        lineCount--; // Because the loop will run once for idx=-1
        do {
          idx = buffer.indexOf(10, idx + 1);
          lineCount++;
        } while (idx !== -1);
      })
      .on("end", () => {
        console.log(`${filePath} has ${lineCount} lines`);
        resolve(lineCount);
      })
      .on("error", reject);
  });
}

countFileLines("test.js");
