const yargs = require("yargs").argv;
const axios = require("axios");

const externalQuoteData = command => {
  switch (command) {
    case "load external quote":
      axios
        .get(
          "http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php"
        )
        .then(response => {
          console.log(
            `Cytat: ${response.data.quote}, autor: ${response.data.author}`
          );
        })
        .catch(error => {
          console.log(error.message);
        });
      break;
  }
};

module.exports = {
  externalDataFunction: externalQuoteData
};
