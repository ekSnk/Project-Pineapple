const Discord = require("discord.js");

exports.run = (client, message) => {
  let member = message.author.id;

  const embed = new Discord.RichEmbed()
  .setTitle('Mary-Janes help guide.')
  .setAuthor('Skenk')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('This is the help command for the Mary-Jane discord bot. It would be wise to know that each of the commands mentioned is used as follows ">info".\nEnjoy')
  .setFooter('Thanks for using the bot <3')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()

  .addField('info','Produces information about the bot.')
  .addField('uhm','Produces this help document.')
  .addField('ping','Simple test command to check that the bot is alive.')
  .addField('purge','provide a number(max of 100) to delete that ammount of messages from chat.')
  .addField('suggestion','Sends Skenk a message with your suggestion.')
  .addField('bug', 'Send Skenk your bug report.')
  .addField('github', 'Get a link to the github the bot is being developed on.')
  .addField('userinfo','Sends the user stats from the level system')
  //Fun commands
  .addField('catfact','Grabs you a random cat fact.')
  .addField('cointoss','Tosses a coin for you')
  .addField('play','Provide the link to a youtube video and the bot will play it for you ... at full volume')
  .addField('roll','The bot will roll 2 dice for you and give you the result.')
  .addField('troll','This command probably doesnt do anything...')
  .addField('trump','Bring forth the grandmaster trump.')
  .addField('yt','Searches youtube and gives you the top link for the search terms')
  .addField('rhot', 'Provide a subreddit and get the 5 hottest posts from it.')
  .addField('liveesport', 'Provides a collection of streams to watch esports on.')
  .addField('urban', 'Give it a word and get the urban dictionary definition.')
  .addField('randomurban', 'Provides information on a random word from urban dictionary.')
  //Cannabis commands
  .addField('420code','Provides you the link to an excellent audio version of the 420code publication.')
  .addField('chillntoke','Links you to the joint youtube experience and chatroom treesradio.')
  .addField('imbaked','Randomly gives you a link to check whilst baked.')
  .addField('strain','Provide a strain name and get 5 results.')
  .addField('trees','This will give you the first 5 links from the frontpage of the /r/trees subreddit.')
  .addField('helprolling','Links you to a handy guide for beginners of joint rolling.')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /*
   * Blank field, useful to create some space.
   */
   //Functional commands
  .addField('\u200b', '\u200b', true);

  message.reply("Please see your PM's for the help guide.");
  client.users.get(member).sendEmbed(embed);
};
