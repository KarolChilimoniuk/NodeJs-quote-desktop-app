const fs = require("fs");
const colors = require("colors");

const randomQuote = async () => {
  let data = null;
  try {
    data = await require("./quotes.json");
  } catch {
    throw new Error(`JSON file not found`);
  }
  const randomElement = await data[Math.floor(Math.random() * data.length)];
  randomElement.randomCallingCounter += 1;
  console.log(
    `\nid: ${colors.cyan(randomElement.id)}, \nQuote: ${colors.yellow(randomElement.sentence)}, \nAuthor: ${colors.green(randomElement.author)}, \ngenre: ${colors.blue(randomElement.genre)}, \nrandom calling counter: ${colors.red(randomElement.randomCallingCounter)}`
  );
  fs.writeFile("quotes.json", `${JSON.stringify(data)}`, err => {
    if (err) {
      throw new Error("Can't be saved");
    }
  });
};

module.exports = {
  command: "random",
  aliases: ["r"],
  desc: "Load random quote from json file",
  handler: randomQuote
};