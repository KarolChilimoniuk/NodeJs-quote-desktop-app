const appCommand = require("./commands");
const externalDataQuote = require("./externalQuote");
const addFunction = require("./add");
const loadQuotesFunction = require("./loadQuotes");
const loadQuote = require("./loadQuote");
const randomQuote = require("./randomQuote");
const removeQuote = require("./removeQuote");
const help = require("./help");

// appCommand.commandFunction(appCommand.command);
externalDataQuote.externalDataFunction(appCommand.command);
addFunction.addFunction(appCommand.command);
loadQuotesFunction.loadQuotesFunction(appCommand.command);
loadQuote.loadQuoteFunction(appCommand.command);
randomQuote.randomFunction(appCommand.command);
removeQuote.removeFunction(appCommand.command);
help.helpFunction(appCommand.command);
