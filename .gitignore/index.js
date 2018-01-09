const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Mange une banane");
    console.log("le bot a bien été connecté");
});
bot.login("NDAwMDczNjAzNTg1OTMzMzEz.DTX8TA.jz1-Ex3DfYKUq6HPIi8DQg_Yo-c");
