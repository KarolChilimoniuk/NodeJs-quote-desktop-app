const colors = require("colors");

const loadQuote = async ({
  parameter
}) => {
  let data = null;
  try {
    data = await require("./quotes.json");
  } catch {
    throw new Error(`JSON file not found`);
  }
  data.filter((el, i, array) => {
    if (
      array[i].id === parameter ||
      array[i].sentence === parameter ||
      array[i].author === parameter ||
      array[i].genre === parameter && array[i].genre != undefined
    ) {
      console.log(
        `\nid: ${colors.cyan(array[i].id)}, \nQuote: "${colors.yellow(array[i].sentence)}", \nAuthor: ${colors.green(array[i].author)}, \ngenre: ${colors.blue(array[i].genre)}
              `
      );
    } else if (array[i].id != parameter &&
      array[i].sentence != parameter &&
      array[i].author != parameter &&
      array[i].genre != parameter) {
      if (array[i] == array[array.length - 1]) {
        throw new Error('Nie ma takiego cytatu');
      }
    }
  });
}

module.exports = {
  command: "loadOne <parameter>",
  aliases: ["one"],
  desc: "Load your chosen quote from json file.",
  handler: loadQuote
}