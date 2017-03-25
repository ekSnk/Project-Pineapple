exports.run = (client, message) => {

  function engage(){
    message.channel.sendMessage('**ENGAGING TRUMP MODE**');
  }
  function summoning(){
    message.channel.sendMessage('**SUMMONING GRANDMASTER TRUMP**');
  }
  function itstoolate(){
    message.channel.sendMessage('**ITS TOO LATE HERE HE IS!**\n http://images.dailykos.com/images/314739/story_image/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg?1476921210');
  }
  function cantstump(){
    message.channel.sendMessage('**YOU CANT STUMP THE TRUMP!**\n https://ih0.redbubble.net/image.148163452.9112/sticker,375x360.u3.png');
  }

  engage();

  setTimeout(summoning, 5000);
  setTimeout(itstoolate, 5000);
  setTimeout(cantstump, 5000);
};
