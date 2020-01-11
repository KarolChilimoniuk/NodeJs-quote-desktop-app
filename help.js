const help = command => {
  switch (command) {
    case "help":
      console.log(`
              To add sentence: --command="add" --sentence="sentence" --author="author" --genre="genre";
              To load random quote: --command="random quote";
              To load all quotes: --command="load quotes"; 
              To load one chosen quote: --command="load quote" and chosen: --id="id" or --author="author" or --sentence="sentence" or --genre="genre"; 
              To load quote from external server: --command="load external quote"; 
              To remove chosen quote: --command="remove quote" and --id="id" or --author="author" or --sentence="sentence" or --genre="genre"; 
            `);
      break;
  }
};

module.exports = {
  helpFunction: help
};
