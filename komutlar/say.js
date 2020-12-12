const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  let member = message.guild.members.size;
  let tag = message.guild.members.filter(r=>r.user.username.includes('❃')).size
  let çevrimiçi = message.guild.members.filter(m => m.presence.status !== "offline").size
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  


const berk = new Discord.RichEmbed()
  .setColor("black")
        .setDescription(`\`>\` Sunucuda toplam ${member} üye bulunmaktadır.\n\`>\` Toplamda ${tag} kişi tagımızı alarak bizi desteklemiş.\n \`>\` Sesli kanallarda ${count} kişi bulunmaktadır.`)
        .setTimestamp()
        .setFooter(``, );
  message.channel.sendEmbed(berk).then(m => m.delete(5000));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"]
};

exports.help = {
  name: 'info',
  description: '',
  usage: ''
};

