exports.run = (client, message) => {
  message.channel.sendMessage("pong!").catch(console.error);
};
