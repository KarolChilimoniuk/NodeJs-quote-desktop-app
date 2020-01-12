const fs = require('fs');
const colors = require("colors");

const loadQuotes = () => {
  fs.readFile("quotes.json", "utf-8", (err, quotes) => {
    if (err) {
      throw new Error("Błąd ładowania");
    } else {
      const parsedQuote = JSON.parse(quotes);
      parsedQuote.map((quote, i, array) => {
        console.log(
          `\nid: ${colors.cyan(array[i].id)}. \nQuote: "${colors.yellow(array[i].sentence)}", \nAuthor: ${colors.green(array[i].author)}, \ngenre: ${colors.blue(array[i].genre)}
              `
        );
      });
    }
  });
};

module.exports = {
  command: "loadAll",
  aliases: ["all"],
  desc: "Load all quotes from json file.",
  handler: loadQuotes
}