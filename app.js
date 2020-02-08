const createFileCommand = require("./createJson");
const externalQuoteCommand = require("./externalQuote");
const addCommand = require("./add");
const loadQuotesCommand = require("./loadQuotes");
const loadQuoteCommand = require("./loadQuote");
const randomQuoteCommand = require("./randomQuote");
const removeQuoteCommand = require("./removeQuote");


require('yargs')
  .command(createFileCommand)
  .command(addCommand)
  .command(externalQuoteCommand)
  .command(loadQuoteCommand)
  .command(loadQuotesCommand)
  .command(randomQuoteCommand)
  .command(removeQuoteCommand)
  .help().argv;
