const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = 'NTI4MjUzMjI1NTQ0MTg3OTA0.Dwf3lQ.S_r20GsniAt0HBaW28SQllcImDk';

bot.login(Token);

bot.on('message', function(message){
    id = message.author.id;
    mention = '<@' + id + '>';
    if(message.content == '<:pa:528323022893875200>'){
        message.channel.send('hi');
    }
    
});
