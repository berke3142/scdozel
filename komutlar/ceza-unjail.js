const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

if(!message.member.roles.has("kullanacağı rol id")) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!`);
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemeyi unuttun kanka.')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  member.addRole('verilecek rol id')
  member.removeRole('cezalı rol id')
  let embed = new Discord.RichEmbed()
  .setColor('RED')
  .addField(`Sunucu adınız`, `${kullanıcı} **adlı üyenin cezası kalktı! **`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.react('verilecek tepki id')
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["cezaaç"],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}

exports.help = {
  name: 'unjail',
  description: "Cezalı rolünü kaldırır",
  usage: 'Cezalı rolü açar'
}