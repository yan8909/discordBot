const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = 'NTI4MjUzMjI1NTQ0MTg3OTA0.Dwf3lQ.S_r20GsniAt0HBaW28SQllcImDk';

bot.login(Token);
id = '520481540027711488';
bot.on('message', function(message){
    
    mention = '<@' + id + '>';
    if(message.content == '<:yee:524609574540673065>'){
        message.channel.send('mention');
    }
    
});
