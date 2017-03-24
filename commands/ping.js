exports.run = (client, message, args) => {
  message.channel.sendMessage("pong!").catch(console.error);
}
