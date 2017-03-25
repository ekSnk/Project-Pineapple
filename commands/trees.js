exports.run = (client, message) => {
  var request = require('request');
  var webpage = 'http://www.reddit.com/r/trees/hot.json?limit=4';

  var postCount = 0;

  request({uri : webpage, json: true, headers: {useragent: 'ProjectPineapple V2'}}, function(error, response, body){
    if(!error && response.statusCode === 200){
      for(var key in body.data.children){
        var url = body.data.children[key].data.id;
        var title = body.data.children[key].data.title;
        postCount++
        message.channel.sendMessage(`### **R/TREES POST: ${postCount}** ###\nTITLE: ${title}\nURL: https://redd.it/${url}`);
      }
    }
  });
};
