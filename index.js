const { Client, GatewayIntentBits } = require('discord.js');
const { config }  = require("dotenv");
const bot = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences
	],
});
const fs = require('fs');

// helth check
const express = require("express");
const router = express.Router({});
router.get('/', async (_req, res, _next) => {

    const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    try {
        res.send(healthcheck);
    } catch (error) {
        healthcheck.message = error;
        res.status(503).send();
    }
});
// export router with all routes included
module.exports = router;

config();
// const Token = process.env.Token;
const Token = process.env.DiscordToken;
bot.login(Token);

var Yeeid = process.env.YeeId;
var mention = '<@' + Yeeid + '>';
var yeeArray = ['yee', 'Yee', 'ㄏㄏ', '廠廠']
var guild = bot.guilds.cache.get(process.env.ServerId);

bot.on('ready', () => {
    var guid = bot.guilds.cache.filter(function(obj){return obj==process.env.ServerId}).first();
    guid.members.fetch({ withPresences: true });
//     fs.readdir('./images/shoot', function(err, files){
//         if(err) {
//             return console.error(err);
//         }
//         var num = Math.random() * files.length;
//         var file = files[Math.floor(num)];
        
//         console.log( file );
//         console.log(num);
//         console.log(Math.floor(num));
//         console.log(bot.guilds.cache)
//         var guid = bot.guilds.cache.filter(function(obj){return obj=='524539217167122442'}).first();
//         guid.members.cache.forEach(function(v, i){
//             console.log(v)
//         })
//         console.log(guid.members.cache.filter(m=>m.client.presence.status == "online"));
//     });
  });


bot.on('messageCreate', function(message){
    //狀態
    // if(message.content.startsWith('!status')){
    //     var msg = message.content;
    //     var userName = msg.slice(msg.indexOf(' ') + 1);
    //     var user = bot.users.find('username', userName);

    //     if(userName == '<:yee:524609574540673065>' || yeeArray.includes(userName) ){
    //         user = bot.users.find('username', 'salmon');
    //     }

    //     if(user) {
    //         if(user.presence.status == 'offline'){
    //             message.channel.send(userName + ' (¦3[▓▓]  有事請留言');
    //         }else if (user.presence.status == 'idle' || user.presence.status == 'dnd') {
    //             message.channel.send(userName + ' 在忙' + '<:Uknow:554584844542410752>');
    //         }
    //         else{
    //             message.channel.send(user.presence.status);
    //         }
    //     }
    //     else{
    //         message.channel.send('誰???')
    //     }


    // }    

    switch(message.content)
    {
        case '<:yee:524609574540673065>' :
            var guid = bot.guilds.cache.filter(function(obj){return obj==process.env.ServerId}).first();
            // guid.members.cache.forEach(function(v, i){
            //     console.log(v)
            // })
            // console.log(guid.members.cache.filter(m=>m.client.presence.status == "online"));
            var yee = guid.members.cache.filter(m=>m.user.id == Yeeid).first();
            var yeeStatus = "";
            if(yee.presence == null){
                yeeStatus = "offline"
            }
            else{
                yeeStatus = yee.presence.status
            } 
            if(yeeStatus == 'offline'){
                message.channel.send(mention + ' (¦3[▓▓]  有事請留言');
            }else if (yeeStatus == 'idle' || yeeStatus == 'dnd') {
                message.channel.send(mention + ' 在忙' + '<:Uknow:554584844542410752>');
            }
            else if (yeeStatus == 'online'){
                message.channel.send(mention + ' ─=≡Σ((( つ•̀ω•́)つ');
            }
             break;

        case "上車" :
            message.channel.send({content:'沒時間解釋了 快上車!', files: ['./images/djv.gif']
            })
            .catch(console.error);
            break;

        case "怕" :
            message.channel.send({files: ['./images/megumin.gif']
            })
            .catch(console.error);
            break;
        
        case "爆射" :
            fs.readdir('./images/shoot', function(err, files){
                if(err) {
                    console.error;
                }
                var shoot  = files;
                message.channel.send({files: [ './images/shoot/' + shoot[Math.floor(Math.random() * shoot.length)] ]
                })
                .catch(console.error);
            });
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
        case "bro":
            fs.readdir('./images/bro', function(err, files){
                if(err) {
                    console.error;
                }
                var bro  = files;
                message.channel.send({files: [ './images/bro/' + bro[Math.floor(Math.random() * bro.length)] ]
                })
                .catch(console.error);
            });
            break;
        case "嗨起來" :
            var num = Math.floor( Math.random() * 25 )
            message.channel.send({content:"ギリギリeye~  ギリギリmind~", files: [`./images/giri/${num}.gif`]
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
                "-(大)爆射\n" +
                "-嗨起來\n"+
                "-舔\n" +
                "-阿福\n" +
                "-大王\n" +
                "-gacha\n" +
                "```"
            );
            break;
    }

});
