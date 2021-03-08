const Discord = require("discord.js");

exports.run = (client, message, args) => {
	const server = message.guild;
	const embed = new Discord.RichEmbed()
		.setThumbnail(server.iconURL)
		.setAuthor(server.name, server.iconURL)
		.addField('ID', server.id, true)
	    .addField('Region', server.region, true)
	    .addField('Created at', server.joinedAt.toDateString(), true)
	    .addField('Server owner', server.owner.user.tag +'('+server.owner.user.id +')', true)
	    .addField('Members', server.memberCount, true)
	    .addField('Roles', server.roles.size, true)
	    .setColor(0x5500FF)
	message.channel.send(embed);
}

// Source: https://portalmybot.com/guia/mybot/ejemplos-basicos