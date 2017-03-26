exports.run = () => {
  var request = require('request');
  var secrets = require('../lib/secrets.json');

  var rl = 'https://api.twitch.tv/kraken/streams/rocketleague?client_id=' + secrets.TWITCH_ID;
  var eslcs = 'https://api.twitch.tv/kraken/streams/esl_cs?client_id=' + secrets.TWITCH_ID;
  var esllol = 'https://api.twitch.tv/kraken/streams/esl_lol?client_id=' + secrets.TWITCH_ID;

  const rloptions ={
    uri: rl,
    method: 'GET',
  };

  const eslcsoptions ={
    uri: eslcs,
    method: 'GET',
  };

  const eslloloptions ={
    uri: esllol,
    method: 'GET',
  };

  request(rloptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      console.log("RL Channel is not live");
    }else {
      console.log("RL Channel is not live");
    }
  });

  request(eslcsoptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      console.log("CS Channel is not live");
    }else {
      console.log("RL Channel is not live");
    }
  });

  request(eslloloptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      console.log("LOL Channel is not live");
    }else {
      console.log("Channel is live");
    }
  });
};
