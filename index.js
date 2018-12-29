const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = process.env.Token;

bot.login(Token);
var id = '520481540027711488';
bot.on('message', function(message){
    
    var mention = '<@' + id + '>';
    if(message.content == '<:yee:524609574540673065>'){
        message.channel.send(mention);
    }
    
});
