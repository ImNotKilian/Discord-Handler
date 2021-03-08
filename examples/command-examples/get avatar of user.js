const Discord = require("discord.js");

exports.run = (client, message, args) => {
	var member = message.mentions.users.first();
	
  	if (member == null) {
  		message.channel.send("<@" + message.author.id + ">" + " You need to mention a user.");
  		return;
  	}

  	const embed = new Discord.RichEmbed()
        .setAuthor("Avatar", client.user.avatarURL)
        .setDescription("Here the avatar of <@" + member.id + ">");
        .setColor(0x5500FF)
        .setFooter("Requested by: " + message.member.user.tag, message.author.avatarURL)
        .setImage(member.avatarURL)
        .setTimestamp()
   	message.channel.send({embed});
}
