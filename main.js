///
//<3 Skenk
///

const Discord = require("discord.js");
const client = new Discord.Client();

const sql = require('sqlite');
sql.open('./levelsys/levels.sqlite');

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
  if (message.channel.type == 'dm') return;//Bot ignores messages sent via DM

  sql.get(`SELECT * FROM levels WHERE userId ='${message.author.id}'`).then(row =>{
    if(!row){
      sql.run('INSERT INTO levels (userId, exp, level) VALUES (?,?,?)', [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.exp + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE levels SET exp = ${row.exp + 1}, level = ${row.level} WHERE userId ${message.author.id}`);
        message.reply(`You've leveld up to level **${curLevel}**`);
      }
      sql.run(`UPDATE levels SET exp = ${row.exp + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() =>{
    console.error;
    sql.run('CREATE TABLE IF NOT EXISTS levels (userId TEXT, exp INTEGER, level INTEGER)').then(() => {
      sql.run('INSERT INTO levels (userId,exp,level) VALUES (?,?,?)', [message.author.id, 1, 0]);
    });
  });

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
