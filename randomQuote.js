const argv = require("yargs").argv;
const fs = require("fs");
const data = require("./cytaty.json");

const randomQuote = command => {
  switch (command) {
    case "random quote":
      const randomElement = data[Math.floor(Math.random() * data.length)];
      randomElement.randomCallingCounter += 1;
      console.log(
        `id: ${randomElement.id}, \nCytat: ${randomElement.sentence}, \nautor: ${randomElement.author}, \ngrupa cytatów: ${randomElement.genre}, \nilość losowych wywołań cytatu do tej pory: ${randomElement.randomCallingCounter}`
      );
      fs.writeFile("cytaty.json", `${JSON.stringify(data)}`, err => {
        if (err) {
          throw new Error("Błąd zapisu");
        }
      });
      break;
  }
};

module.exports = {
  randomFunction: randomQuote
};