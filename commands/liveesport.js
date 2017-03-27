exports.run = (client, message) => {
  var request = require('request');
  var secrets = require('../lib/secrets.json');

  var rl = 'https://api.twitch.tv/kraken/streams/rocketleague?client_id=' + secrets.TWITCH_ID;
  var eslcs = 'https://api.twitch.tv/kraken/streams/esl_cs?client_id=' + secrets.TWITCH_ID;
  var esllol = 'https://api.twitch.tv/kraken/streams/esl_lol?client_id=' + secrets.TWITCH_ID;
  var eleague = 'https://api.twitch.tv/kraken/streams/eleaguetv?client_id=' + secrets.TWITCH_ID;
  var overwatch = 'https://api.twitch.tv/kraken/streams/esl_overwatch?client_id=' + secrets.TWITCH_ID;
  var starcraft = 'https://api.twitch.tv/kraken/streams/starcraft?client_id=' + secrets.TWITCH_ID;
  var dota = 'https://api.twitch.tv/kraken/streams/dotamajor?client_id=' + secrets.TWITCH_ID;
  var lol = 'https://api.twitch.tv/kraken/streams/riotgames?client_id=' + secrets.TWITCH_ID;

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
  const eleaguetvoptions ={
    uri: eleague,
    method: 'GET',
  };
  const overwatchoptions ={
    uri: overwatch,
    method: 'GET',
  };
  const starcraftoptions ={
    uri: starcraft,
    method: 'GET',
  };
  const dotaoptions ={
    uri: dota,
    method: 'GET',
  };
  const loloptions ={
    uri: lol,
    method: 'GET',
  };

  const rlembed = {
    "title": "Rocket League",
    "description": "We recommend using this channel to watch live Rocket League tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "Psyonix",
      "icon_url": "http://psyonix.com/wp-sandbox/wp-content/themes/dt-nimble/timthumb.php?src=/wp-sandbox/wp-content/uploads/2013/07/psyonix-logo.png&zc=0&w=76&h=89&r_src=/wp-sandbox/wp-content/uploads/2013/07/psyonix-logo-r.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/rocketleague"
      }
    ]
  };
  const eslcsembed = {
    "title": "ESL: Counter-Strike: Global Offensive",
    "description": "We recommend using this channel to watch live CSGO tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "Valve & ESL",
      "icon_url": "http://logonoid.com/images/esl-logo.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/esl_cs"
      }
    ]
  };
  const esllolembed = {
    "title": "ESL: League of Legends",
    "description": "We recommend using this channel to watch live LoL tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "RiotGames & ESL",
      "icon_url": "http://logonoid.com/images/esl-logo.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/esl_lol"
      }
    ]
  };
  const eleaguelembed = {
    "title": "Eleauge: Counter-Strike: Global Offensive",
    "description": "We recommend using this channel to watch live eleague tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "PBS",
      "icon_url": "https://pbs.twimg.com/media/CVWOjHHXAAEbUf9.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/eleaguetv"
      }
    ]
  };
  const overwatchembed = {
    "title": "ESL: Overwatch",
    "description": "We recommend using this channel to watch live overwatch tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "Blizzard",
      "icon_url": "http://logonoid.com/images/esl-logo.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/esl_overwatch"
      }
    ]
  };
  const starcraftembed = {
    "title": "Starcraft 2",
    "description": "We recommend using this channel to watch live Starcarft 2 tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "Blizzard",
      "icon_url": "http://logonoid.com/images/starcraft-2-logo.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/starcraft"
      }
    ]
  };
  const dotaembed = {
    "title": "Dota Major",
    "description": "We recommend using this channel to watch live Dota 2 tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "Valve",
      "icon_url": "https://exoexit.com/wp-content/uploads/2015/12/dota-2-logo.jpg"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/dotamajor"
      }
    ]
  };
  const lolembed = {
    "title": "RiotGames",
    "description": "We recommend using this channel to watch live LoL tournaments.",
    "color": 12524120,
    "timestamp": "2017-03-27T10:41:53.680Z",
    "footer": {},
    "author": {
      "name": "Riot Games",
      "icon_url": "https://upload.wikimedia.org/wikipedia/en/4/47/Riot_Games_logo.png"
    },
    "fields": [
      {
        "name": "URL:",
        "value": "https://www.twitch.tv/riotgames"
      }
    ]
  };

  request(rloptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the Rocket League stream is offline");
    }else {
      message.channel.sendEmbed(rlembed);
    }
  });

  request(eslcsoptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the ESL CS stream is offline");
    }else {
      message.channel.sendEmbed(eslcsembed);
    }
  });

  request(eslloloptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the ESL LoL stream is offline");
    }else {
      message.channel.sendEmbed(esllolembed);
    }
  });

  request(eleaguetvoptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like Eleague is offline");
    }else {
      message.channel.sendEmbed(eleaguelembed);
    }
  });

  request(overwatchoptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the ESL Overwatch stream is offline");
    }else {
      message.channel.sendEmbed(overwatchembed);
    }

  });
  request(starcraftoptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the Starcraft stream is offline");
    }else {
      message.channel.sendEmbed(starcraftembed);
    }
  });

  request(dotaoptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the Dota major stream is offline");
    }else {
      message.channel.sendEmbed(dotaembed);
    }
  });

  request(loloptions, function(err, res, body){
    let json = JSON.parse(body);
    if (json.stream == null){
      message.channel.sendMessage("Looks like the RiotGames stream is offline");
    }else {
      message.channel.sendEmbed(lolembed);
    }
  });

};
