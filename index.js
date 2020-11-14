const Discord = require('discord.js');
const Canvas = require('canvas');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});



const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 20;

	do {
		ctx.font = `${fontSize -= 20}px Heatwave`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

bot.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(channel => channel.name === 'welcome')
	if (!channel) return;

	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./background.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#0324fc';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '30px Road Rage';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome to the server,', canvas.width / 2.4, canvas.height / 4.5);

	ctx.font = '60px Road Rage';(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#fcd303';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 2.3);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	channel.send(`Welcome to the server, ${member}!`, attachment);
});

/*
bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === 'welcome')      			old welcome command without picture
    welcomeChannel.send (`Welcome! ${member}`)
})
*/



require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

bot.login(botsettings.token);