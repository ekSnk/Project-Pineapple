const main = require("../main.js");

exports.run = (client, message) => {
  message.reply(`You are currently level ${main.curLevel}, with ${main.userPoints} points.`);
};
