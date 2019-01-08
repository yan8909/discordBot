const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = process.env.Token;

bot.login(Token);

var Yeeid = '520481540027711488';
var mention = '<@' + Yeeid + '>';

bot.on('message', function(message){

    switch(message.content)
    {
        case '<:yee:524609574540673065>' :
            message.channel.send(mention);
            break;

        case "上車" :
            message.channel.send({files: ['./images/djv.gif']
            })
            .catch(console.error);
            break;

        case "怕" :
            message.channel.send({files: ['./images/megumin.gif']
            })
            .catch(console.error);
            break;
        
        case "大爆射" :
            message.channel.send({files: ['./images/bigshoot.gif']
            })
            .catch(console.error);
            break;

        case "惠射" :
            message.channel.send({files: ['./images/megu_shoot.gif']
            })
            .catch(console.error);
            break;

        case "嗨起來" :
            var num = Math.floor( Math.random() * 25 )
            message.channel.send({files: [`./images/giri/${num}.gif`]
            })
            .catch(console.error);
            break;

        case "舔" :
            message.channel.send({files: ['./images/lick.gif']
            })
            .catch(console.error);
            break;

        case "!help" :
            message.channel.send(
                "```\n" +
                "指令表\n" +
                "- 上車\n" +
                "- 怕\n" +
                "- 大爆射\n" +
                "- 惠射\n" +
                "- 嗨起來\n"+
                "- 舔" +
                "```"
            );
            
    }

});
