const fs = require("fs");
const lodash = require("lodash");
const data = require("./cytaty.json");

const removeQuote = async ({
  parameter
}) => {
  let data = null;
  try {
    data = await require("./quotes.json");
  } catch {
    throw new Error(`JSON file not found`);
  }
  if (parameter == null) {
    throw new Error(`Define category`);
  } else {
    lodash.remove(data, (el, i, array) => {
      if (array[i].id === parameter && parameter != null) {
        return el;
      } else if (array[i].author === parameter && parameter != null) {
        return el;
      } else if (array[i].sentence === parameter && parameter != null) {
        return el;
      } else if (array[i].genre === parameter && parameter != null) {
        return el;
      }
    });
    fs.writeFile("quotes.json", `${JSON.stringify(data)}`, err => {
      if (err) {
        throw new Error("Can't be saved");
      } else {
        console.log("Saved");
      }
    });
  }
};

module.exports = {
  command: "remove <parameter>",
  aliases: ["del"],
  desc: "Remove chosen quote from json file",
  handler: removeQuote
};