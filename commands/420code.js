const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle('The 420 Code!', 'https://soundcloud.com/sachin-patel-65/420-code')
  .setAuthor('/u/5moker & Sachin Patel')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('The 420 code originally created by /u/5moker, is a great publication on ettiquette of weed with friends. This is a link to a great audio version by Sachin Patel')
  .setFooter('Thanks for using the bot <3')
  .setThumbnail('http://www.the420code.com/wp-content/uploads/2014/04/bongtree-178x300.png')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://soundcloud.com/sachin-patel-65/420-code')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*
   * Blank field, useful to create some space.
   */
  .addField('\u200b', '\u200b', true);

  message.channel.sendEmbed(
  embed,
  'Thanks for being a good ent.',
  { disableEveryone: true }
);


};
