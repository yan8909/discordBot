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
            message.channel.send('沒時間解釋了 快上車!', {files: ['./images/djv.gif']
            })
            .catch(console.error);
            break;

        case "怕" :
            message.channel.send({files: ['./images/megumin.gif']
            })
            .catch(console.error);
            break;
        
        case "大爆射" :
            var img = [
                './images/bigshoot.gif',
                './images/megu_shoot.gif',
                './images/shoot_spin.gif'
            ]
            message.channel.send({files: [ img[Math.floor(Math.random() * img.length)] ]
            })
            .catch(console.error);
            break;

        case "嗨起來" :
            var num = Math.floor( Math.random() * 25 )
            message.channel.send("ギリギリeye~  ギリギリmind~",{files: [`./images/giri/${num}.gif`]
            })
            .catch(console.error);
            break;

        case "舔" :
            message.channel.send({files: ['./images/lick.gif']
            })
            .catch(console.error);
            break;

        case "阿福" :
            message.channel.send({files: ['./images/afu.gif']
            })
            .catch(console.error);
            break;

        case "大王" :
            message.channel.send({files: ['./images/dawang.gif']
            })
            .catch(console.error);
            break;

        case "gacha" :
            message.channel.send({files: ['./images/gacha.gif']
            })
            .catch(console.error);
            break;

        case "!help" : 
            message.channel.send(
                "```\n" +
                "指令表\n" +
                "-上車\n" +
                "-怕\n" +
                "-大爆射\n" +
                "-嗨起來\n"+
                "-舔\n" +
                "-阿福\n" +
                "-大王\n" +
                "-gacha" +
                "```"
            );
            break;
            
    }

});
