const argv = require("yargs").argv;
const fs = require("fs");
const lodash = require("lodash");
const data = require("./cytaty.json");

const sentence = argv.sentence;
const author = argv.author;
const genre = argv.genre;
const id = argv.id;

const removeQuote = command => {
  switch (command) {
    case "remove quote":
      if (id == null && author == null && sentence == null && genre == null) {
        throw new Error(`Określ jaki cytat chcesz usunąć`);
      } else {
        lodash.remove(data, (el, i, array) => {
          if (array[i].id === id && id != null) {
            return el;
          } else if (array[i].author === author && author != null) {
            return el;
          } else if (array[i].sentence === sentence && sentence != null) {
            return el;
          } else if (array[i].genre === genre && genre != null) {
            return el;
          }
        });
        data.forEach((el, i, array) => {
          array[i].id = ++i;
        });
        fs.writeFile("cytaty.json", `${JSON.stringify(data)}`, err => {
          if (err) {
            throw new Error("Błąd zapisu");
          } else {
            console.log("Zapisano zmiany");
          }
        });
      }
      break;
  }
};

module.exports = {
  removeFunction: removeQuote
};
