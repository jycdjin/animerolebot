const Discord = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '%'

const fs = require('fs');

client.commands = new Discord.Collection();

const commandsFile = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of CommandsFile){
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Heaven is online!');
});

client.on('message', message =>{

    message.member.roles.cache.has
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'member'){
        client.commands.get('member').execute(message, args, Discord, client);
       
    }
});

client.login(process.env.token);
