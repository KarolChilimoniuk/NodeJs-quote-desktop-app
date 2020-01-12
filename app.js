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

// appCommand.commandFunction(appCommand.command);
// dataFile.createFile(appCommand.command);
// externalDataQuote.externalDataFunction(appCommand.command);
// addFunction.addFunction(appCommand.command);
// loadQuotesFunction.loadQuotesFunction(appCommand.command);
// loadQuote.loadQuoteFunction(appCommand.command);
// randomQuote.randomFunction(appCommand.command);
// removeQuote.removeFunction(appCommand.command);
// help.helpFunction(appCommand.command);