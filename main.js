///
//<3 Skenk
///

const Discord = require("discord.js");
const client = new Discord.Client();

const secrets = require("./lib/secrets.json");

client.login(secrets.CLIENT_TOKEN);

client.on("ready",() => {
  console.log("Client has been logged in");
});

client.on("message",(message) => {
  if(!message.content.startsWith(secrets.BOT_PREFIX)) return;
  if(message.author.bot) return;

  let command = message.content.split(" ")[0];
  command = command.slice(secrets.BOT_PREFIX.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err){
    console.error(err);
  }
});
