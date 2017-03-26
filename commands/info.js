exports.run = (client, message) => {
  message.reply(`Hello my name is ${client.user.username} a Discord bot. \n` +
                'I was created using Node.JS and the latest version of Discord.JS.\n' +
                `I am currently mainted solely by <@202186161039474689> and my source code can be found on the github.\n` +
                 `To see what actions I can preform use the command !uhm`);
};
