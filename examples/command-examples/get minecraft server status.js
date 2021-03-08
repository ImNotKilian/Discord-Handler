const Discord = require("discord.js");
var request = require('request');

exports.run = (client, message, args) => {

	let server = args[0];
  let port = args[1];

  if (port == null) port = 25565;

  if (server == null) {
    message.channel.send({embed: {
      color: 0x5500FF,
      description: "You need to specify a server ip (optional serve port)"
    }});
    return;
  }


	var options = {
    url: 'https://mcapi.us/server/status?ip=' + server + '&port=' + port
  };


  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      const embed = new Discord.RichEmbed()
        .setThumbnail("https://eu.mc-api.net/v3/server/favicon/" + server + ":" + port + "&.png")
        .setAuthor("Server status", client.member.avatarURL)
        .setColor(0xFF0000)
        .setFooter("Requested by: " + message.member.user.tag, message.author.avatarURL)
        .setTimestamp()
        .addField("IP:", server)
        .addField("Port", port)
        .addField("Motd", info.motd)
        message.channel.send({embed});
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription("Error trying to ping to the server: " + server + ":" + port)
      .setAuthor("Server status", client.member.avatarURL)
      message.channel.send({embed});
  }
}

  request(options, callback);

}