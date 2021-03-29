const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
let tag = "Ψ";
let cetoplam = message.guild.memberCount
let ceonline = message.guild.members.cache.filter(o => o.user.presence.status !== "offline").size
let cesesli = message.guild.members.cache.filter(s => s.voiceChannel).size 
let cetagli = message.guild.members.cache.filter(t => t.user.username.includes(tag)).size
let cebooster = message.guild.roles.cache.get('821015788785107030').members.size

 
let mapping = {
    "0": `<a:00:821365022121787412>`,
    "1": `<a:11:821365023955877918>`,
    "2": `<a:22:821365025045479455>`,
    "3": `<a:33:821365025230815251>`,
    "4": `<a:44:821365025183760394>`,
    "5": `<a:55:821365025796259872>`,
    "6": `<a:66:821365025976614912>`,
    "7": `<a:77:821365026651635722>`,
    "8": `<a:88:821365026278735932>`,
    "9": `<a:99:821365025939128340>`
}

 let toplam =  
    `${cetoplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
let online =  
    `${ceonline}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")

let sesli =  
    `${cesesli}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
let tagli =  
    `${cetagli}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
let booster =  
    `${cebooster}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")

 
 
let arwEmbed = new Discord.MessageEmbed()
.setDescription(`
\`>\` Sunucumuzda toplam ${online} adet üye  bulunmaktadır.
\`>\` Sunucumuzdaki sesli kanallarda ${sesli} adet üye bulunmaktadır.
\`>\` Sunucumuzun tagını almış ${tagli} adet üye bulunmaktadır.
\`>\` Sunucumuzda toplam ${booster} takviyeci bulunmaktadır.`)
.setFooter(ayarlar.footer)
.setColor("RANDOM")
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))//Matthe arweneyi çok seviyorrr
.setTimestamp()

message.channel.send(arwEmbed)

}
exports.config = {
  name: "say",
  guildOnly: true,
  aliases: ["count", "sayı"]
}