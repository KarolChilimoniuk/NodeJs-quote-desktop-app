const argv = require("yargs").argv;
const fs = require("fs");
const data = require("./cytaty.json");

const loadQuotes = command => {
  switch (command) {
    case "load quotes":
      fs.readFile("cytaty.json", "utf-8", (err, quotes) => {
        if (err) {
          throw new Error("Błąd ładowania");
        } else {
          const parsedQuote = JSON.parse(quotes);
          console.log("Zapisano");
          parsedQuote.map((quote, i, array) => {
            console.log(
              `${array[i].id}. Cytat: "${array[i].sentence}", autor: ${array[i].author}, grupa cytatów: ${array[i].genre}`
            );
          });
        }
      });
      break;
  }
};

module.exports = {
  loadQuotesFunction: loadQuotes
}