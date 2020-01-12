const fs = require("fs");

const createFile = () => {
  fs.writeFile(`quotes.json`, `[]`, 'utf-8', err => {
    if (err) {
      throw new Error("Save error");
    } else {
      console.log("Saved");
    }
  });
}

module.exports = {
  command: "create",
  aliases: ["c"],
  desc: "Create a new json file for your data.",
  handler: createFile
}