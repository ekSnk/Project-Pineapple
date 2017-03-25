const yt = require('ytdl-core');

exports.run = (client, message, args) => {
  const voiceChannel = message.member.voiceChannel;

  if (!voiceChannel) {
    return message.reply(`Please be in a voice channel first!`);
  }
  voiceChannel.join()
      .then(connnection => {
        let stream = yt(args.join(" "), {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('end', () => {
          voiceChannel.leave();
        });
      });
};
