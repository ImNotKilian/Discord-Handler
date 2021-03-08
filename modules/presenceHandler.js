// Presence Variables
const twitchUrl = "https://www.twitch.tv/sammwy_";
const motd = "In %guilds% guilds!";
const type = 1;
const status = "available";
const presenceRefreshRate = 60;

// Set presence every X seconds
exports.run = (client) => {
	client.on('ready', () => { 
    	client.user.setStatus(status)
    	client.user.setPresence({ game: { name: getPresence(client), type: type, url: twitchUrl } });
    	setInterval(() => {
       	client.user.setPresence({ game: { name: getPresence(client), type: type, url: twitchUrl } });
    	}, presenceRefreshRate * 1000)
	});
}

function getPresence (client) {
	return motd.replace("%guilds%", client.guilds.size);
}