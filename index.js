const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log("Bot Ready !");
});

bot.login('Mzc2MzgxMDkwNzExMjA3OTQ3.DN9jxg.57lmVg7_D3-mrGRS4qXCF_g7W4g');

bot.on('message', message => {
    if (message.content === "ping"){
        message.reply("pong");
        console.log('ping pong');
    }
});
