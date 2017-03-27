exports.run = (client, message) => {
  // Random mode
  var urban = require('urban');

  urban.random().first(function(json) {
    message.channel.sendMessage(`### **URBAN DICTIONARY DEFINITION** ##\nWord: **${json.word}**\nDefinition: ${json.definition}\nExample: ${json.example}\nURL: ${json.permalink}`);
  });
};
