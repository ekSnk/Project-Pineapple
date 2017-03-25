exports.run = (client, message) => {
  let member = message.author.id;
  client.users.get(member).sendMessage("EMBED");
};
