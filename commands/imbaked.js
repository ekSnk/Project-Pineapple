exports.run = (client, message) => {
  var imbaked = require('../lib/baked.json');

  message.channel.sendMessage(`We recommend checking out the following URL: ${imbaked[Math.floor(Math.random()*imbaked.length)]}\nIf you want to get a site added to the list please use the suggestion command.`);
};
