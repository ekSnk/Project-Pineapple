exports.run = (client, message) => {
  var die1 = 1 + Math.floor(Math.random() * 6);
  var die2 = 1 + Math.floor(Math.random() * 6);

  message.reply(`You've rolled a **${die1}** on the first die and a **${die2}** on the second. Together this totals **${die1 + die2}**.`);
};
