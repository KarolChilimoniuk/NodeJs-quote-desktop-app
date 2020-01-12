const fs = require("fs");

const add = async ({
  sentence,
  author,
  genre
}) => {
  let data = null;
  try {
    data = await require("./quotes.json");
  } catch {
    throw new Error(`JSON file not found`);
  }
  class DataObject {
    constructor(sentence, author, genre) {
      this.id = Math.round(Math.random() * 100000);
      this.randomCallingCounter = 0;
      this.sentence = sentence;
      this.author = author;
      this.genre = genre;
    }
  }
  await data.push(new DataObject(sentence, author, genre));
  fs.writeFile("quotes.json", `${JSON.stringify(data)}`, err => {
    if (err) {
      throw new Error("Błąd zapisu");
    } else {
      console.log("Zapisano");
    }
  })
}

module.exports = {
  command: "add <sentence> <author> [genre]",
  aliases: ["a"],
  desc: "Add a new quote to your json file. [genre] is optional.",
  handler: add
};