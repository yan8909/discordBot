const Commando = require('discord.js-commando');
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const Token = process.env.Token;
const translate = require('@vitalets/google-translate-api');

bot.login(Token);

var Yeeid = '520481540027711488';
var mention = '<@' + Yeeid + '>';
var yeeArray = ['yee', 'Yee', 'ㄏㄏ', '廠廠']

// bot.on('ready', () => {
//     fs.readdir('./images/shoot', function(err, files){
//         if(err) {
//             return console.error(err);
//         }
//         var num = Math.random() * files.length;
//         var file = files[Math.floor(num)];
        
//         console.log( file );
//         console.log(num);
//         console.log(Math.floor(num));
        
//     });
//   });

bot.on('message', function(message){

    //翻譯
    if(message.content.startsWith('tr?')){
        var msg = message.content;
        var srcMsg = msg.slice(msg.indexOf(' ') + 1);
        var toLanguage = msg.slice(3, msg.indexOf(' '));
        
        translate(srcMsg, msg.indexOf(' ')>3 ? {to: toLanguage} : {to: 'zh-tw'}).then(res => {
            message.channel.send({embed: {
                author: {
                    name: message.author.username,
                    icon_url: message.author.avatarURL
                },
                description: res.text
            }})
            }).catch(err => {
                console.error(err);
        });
    }

    //狀態
    if(message.content.startsWith('!status')){
        var msg = message.content;
        var userName = msg.slice(msg.indexOf(' ') + 1);
        var user = bot.users.find('username', userName);

        if(userName == '<:yee:524609574540673065>' || yeeArray.includes(userName) ){
            user = bot.users.find('username', 'salmon');
        }

        if(user) {
            if(user.presence.status == 'offline'){
                message.channel.send(userName + ' (¦3[▓▓]  有事請留言');
            }else if (user.presence.status == 'idle' || user.presence.status == 'dnd') {
                message.channel.send(userName + ' 在忙' + '<:Uknow:554584844542410752>');
            }
            else{
                message.channel.send(user.presence.status);
            }
        }
        else{
            message.channel.send('誰???')
        }


    }    

    switch(message.content)
    {
        case '<:yee:524609574540673065>' :
            var user = bot.users.find('username', 'salmon');
            if(user.presence.status == 'offline'){
                message.channel.send(mention + ' (¦3[▓▓]  有事請留言');
            }else if (user.presence.status == 'idle' || user.presence.status == 'dnd') {
                message.channel.send(mention + ' 在忙' + '<:Uknow:554584844542410752>');
            }
            else{
                message.channel.send(mention + ' ( ºωº ) 醒了啦');
            }
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
                "-(大)爆射\n" +
                "-嗨起來\n"+
                "-舔\n" +
                "-阿福\n" +
                "-大王\n" +
                "-gacha\n" +
                "-tr?目標語言 原文\n" +
                " 語言清單:https://github.com/matheuss/google-translate-api/blob/master/languages.js\n" +
                "```"
            );
            break;
    }

});
