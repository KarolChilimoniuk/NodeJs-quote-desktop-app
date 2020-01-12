const axios = require("axios");
const colors = require("colors");

const externalQuoteData = async () => {
  try {
    const randomQuote = await axios.get("http://ec2-18-217-240-10.us-east-2.compute.amazonaws.com/node/quotes.php")
    console.log(
      `\nQuote: \n${colors.yellow(randomQuote.data.quote)}, 
       \nAuthor: \n${colors.green(randomQuote.data.author)}
      `);
  } catch {
    throw new Error(`External quote not found`);
  }
}

module.exports = {
  command: "external",
  aliases: ["ext"],
  desc: "Load a random quote from external server.",
  handler: externalQuoteData
};