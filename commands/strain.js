exports.run = (client, message, args) => {
  var request = require('request');
  var webpage = "https://www.cannabisreports.com/api/v1.0/strains/search/";

  var options = {
    url: webpage + args,
    method: 'GET',
    headers: {
      'Accept': '*/*'
    }
  };

  request (options, function(error, response, body){
    if(!error && response.statusCode == 200){
      let json = JSON.parse(body);
      message.channel.sendMessage(`### **All strain searches are preformed using the Cannabis Reports API** ###\nName: ${json.data[0].name}\nLink: ${json.data[0].link}\nCannabis Reports UCPC: ${json.data[0].ucpc}\nImage: ${json.data[0].image}\nQR Code: ${json.data[0].qr}`);
      message.channel.sendMessage(`### **All strain searches are preformed using the Cannabis Reports API** ###\nName: ${json.data[0].name}\nLink: ${json.data[0].link}\nCannabis Reports UCPC: ${json.data[1].ucpc}\nImage: ${json.data[1].image}\nQR Code: ${json.data[1].qr}`);
      message.channel.sendMessage(`### **All strain searches are preformed using the Cannabis Reports API** ###\nName: ${json.data[0].name}\nLink: ${json.data[0].link}\nCannabis Reports UCPC: ${json.data[2].ucpc}\nImage: ${json.data[2].image}\nQR Code: ${json.data[2].qr}`);
      message.channel.sendMessage(`### **All strain searches are preformed using the Cannabis Reports API** ###\nName: ${json.data[0].name}\nLink: ${json.data[0].link}\nCannabis Reports UCPC: ${json.data[3].ucpc}\nImage: ${json.data[3].image}\nQR Code: ${json.data[3].qr}`);
      message.channel.sendMessage(`### **All strain searches are preformed using the Cannabis Reports API** ###\nName: ${json.data[0].name}\nLink: ${json.data[0].link}\nCannabis Reports UCPC: ${json.data[4].ucpc}\nImage: ${json.data[4].image}\nQR Code: ${json.data[4].qr}`);
    }
  });

  process.on('uncaughtException', function (err) {
    console.log(err);
    message.channel.sendMessage("### **ERROR 400** ##\nError 400 Bad Request\nUnfortunatly we were unable to locate this strain, Please try again with another strain.");
  });
};
