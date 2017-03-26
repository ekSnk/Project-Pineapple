const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle('Trees Radio!')
  .setAuthor('The trees radio team!', 'https://treesradio.com/')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('We recommend using the trees radio service, Its a great way to relax and chill with other ents with some great tunes to boot.')
  .setFooter('Thanks for using the bot <3')
  .setThumbnail('http://i.imgur.com/bT70o.jpg')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://treesradio.com/')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*
   * Blank field, useful to create some space.
   */
  .addField('\u200b', '\u200b', true);

  message.channel.sendEmbed(
  embed,
  'Time to relax buddy!',
  { disableEveryone: true }
);
};
