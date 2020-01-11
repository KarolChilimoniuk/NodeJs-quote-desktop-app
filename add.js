const argv = require("yargs").argv;
const fs = require("fs");
const data = require("./cytaty.json");

const sentence = argv.sentence;
const author = argv.author;
const genre = argv.genre;

const add = command => {
  switch (command) {
    case "add":
      class DataObject {
        constructor(sentence, author, genre) {
          this.randomCallingCounter = 0;
          this.sentence = sentence;
          this.author = author;
          this.genre = genre;
        }
      }
      data.push(new DataObject(sentence, author, genre));
      data.forEach((el, i, array) => {
        array[i].id = ++i;
      });
      fs.writeFile("cytaty.json", `${JSON.stringify(data)}`, err => {
        if (err) {
          throw new Error("Błąd zapisu");
        } else {
          console.log("Zapisano");
        }
      });
      break;
  }
};

module.exports = {
  addFunction: add
};