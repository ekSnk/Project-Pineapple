exports.run = (client, message, args) => {
  let member = message.author.id;
  client.users.get(member).sendMessage("EMBED")
};
