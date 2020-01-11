const argv = require("yargs").argv;
const data = require("./cytaty.json");

const sentence = argv.sentence;
const author = argv.author;
const genre = argv.genre;
const id = argv.id;

const loadQuote = command => {
  switch (command) {
    case "load quote":
      try {
        data.filter((el, i, array) => {
          if (
            array[i].id === id ||
            array[i].sentence === sentence ||
            array[i].author === author ||
            array[i].genre === genre
          ) {
            console.log(
              `id: ${array[i].id}, \nCytat: "${array[i].sentence}", \nautor: ${array[i].author}, \ngrupa cytatów: ${array[i].genre}`
            );
          } else if (id == null ||
            sentence == null ||
            author == null ||
            genre == null) {
            if (array[i] == array[array.length - 1]) {
              throw new Error('Nie ma takiego cytatu');
            }
          }
        });
      } catch (error) {
        console.log(error.message);
      }
      break;
  }
}

module.exports = {
  loadQuoteFunction: loadQuote
}