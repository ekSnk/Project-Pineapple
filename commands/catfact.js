exports.run = (client, message) => {
  var req = require('request');
  var url = "http://catfacts-api.appspot.com/api/facts";

  var options = {
    url: url,
    method: 'GET',
  };

  req(options, function(err, res, facts){
    let json = JSON.parse(facts);
    message.channel.sendMessage(`Here is your random cat fact: \n${json.facts[0]}`);
  });
};
