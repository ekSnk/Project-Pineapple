exports.run = (client, message, args) => {
  var urban = require('urban'),
    search = urban(args.join(" "));

  search.first(function(json) {
    message.channel.sendMessage(`### **URBAN DICTIONARY DEFINITION** ##\nDefinition: ${json.definition}\nExample: ${json.example}\nURL: ${json.permalink}`);
  });
};
