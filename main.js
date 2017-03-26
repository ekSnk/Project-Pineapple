///
//<3 Skenk
///

const Discord = require("discord.js");
const client = new Discord.Client();

//const fs = require("fs");
//let points = JSON.parse(fs.readFileSync("./levelsys/levels.json", "utf8"));

const secrets = require("./lib/secrets.json");
const setGames = require("./lib/setGames.json");

client.login(secrets.CLIENT_TOKEN);

client.on("ready",() => {
  console.log("Client has been logged in");
  client.user.setGame(setGames[Math.floor(Math.random()*setGames.length)]);
});

client.on("message", message => {
  if (!message.content.startsWith(secrets.BOT_PREFIX)) return;
  if (message.author.bot) return;

//  if (!points[message.author.id]) points[message.author.id] = {
//    points: 0,
//    level: 0
//  };
//  let userData = points[message.author.id];
//  userData.points++;

//  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
//  if (curLevel > userData.level) {
    // Level up!
//    userData.level = curLevel;
//    message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
//  }

//  fs.writeFile('./levelsys/levels.json', JSON.stringify(points), (err) =>{
//    if (err) console.error(err);
//  });

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
