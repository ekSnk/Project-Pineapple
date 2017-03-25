exports.run = (client, message) => {
  var flip = Math.floor(Math.random() * 2 + 1);

  if(flip === 1){
    message.reply("The coin shows **Tails**");
  } else {
    message.reply("The coin shows **Heads**");
  }
};
