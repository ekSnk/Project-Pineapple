const secrets = require("../lib/secrets.json");

exports.run = (client, message, args) => {
  var search = require('youtube-search');

  var opts = {
    maxResults: 1,
    key: secrets.YT_KEY
  };

  search(args.join(" "), opts, function(err, results){
    if (err) return console.log(err);
    message.channel.sendMessage(results[0].link);
  });
};
