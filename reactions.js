const Discord = require('discord.js');

let channel_id = "761754808137809920"; 
let message_id = "761769358514192395";

bot.on("ready", (reaction, user) => {

bot.channels.get(channel_id).fetchMessage(message_id).then(m => {
        console.log("Cached reaction message.");
    }).catch(e => {
    console.error("Error loading message.");
    console.error(e);
});

bot.on("messageReactionAdd", (reaction, user) => {
    if(reaction.emoji.id == "761780064462307370" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "League of Legends"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780109337428048" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "Call of Duty"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780252250341386" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "Overwatch"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780306411782145" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "R6"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780344688345108" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "Valorant"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780557537214494" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "CSGO"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780614285492224" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "Rocket League"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780645584175114" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "Genshin Impact"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
	if(reaction.emoji.id == "761780705956986940" && reaction.message.id === message_id) 
    {
           guild.fetchMember(user) // fetch the user that reacted
                .then((member) => 
            {
                  
                      let role = (member.guild.roles.find(role => role.name === "Hearthstone"));
                    member.addRole(role)
                    .then(() => 
                    {
                        console.log(`Added the role to ${member.displayName}`);
                    });
                
            });
        
        
	}
})})