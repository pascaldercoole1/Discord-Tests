const Eris = require("eris");
const keep_alive = require("./keep_alive.js");

// Replace TOKEN with your bot account's token
const tokens = process.env.token.split(",");
const Bottokens = process.env.bottoken.split(",");

tokens.forEach((token, index) => {
  const bot = new Eris(token);

  bot.on("error", (err) => {
    console.log(`Account Error`);
    console.error(err); // or your preferred logger
  });

  bot.connect();

  console.log(`Acc ${index + 1} connected with token`);
});

Bottokens.forEach((token, index) => {
  const bot = new Eris(token);

  bot.on("error", (err) => {
    console.log(`Bot Error`);
    console.error(err); // or your preferred logger
  });

  bot.connect();

  console.log(`Bot ${index + 1} connected with token`);
});
