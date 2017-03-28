const Discord = require ('discord.js');
const sql = require('sqlite');
sql.open('./levelsys/levels.sqlite');

exports.run = (client, message) => {
  let member = message.author.id;


  sql.get(`SELECT * FROM levels WHERE userId ='${message.author.id}'`).then(row => {
    if (!row) return message.reply('Your current level is 0');
    const embed = new Discord.RichEmbed()
    .setTitle(`${member} Current information.`)
    .setAuthor('Mary-Jane')
    .setColor(0x00AE86)
    .setDescription(`Information and statistics held by Mary-Jane in regards to ${member}`)
    .setTimestamp()
    .addField('Level:', `**${row.level}**`)
    .addField('Current exp:', `**${row.exp}**`)

    message.channel.sendEmbed(embed);
  });
};
