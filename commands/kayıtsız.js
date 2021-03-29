const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:dikkatbe:821365355040735272> **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`<a:dikkatbe:821365355040735272> **Kayıtsıza atmak için bir kişi etiketlemelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))

if(message.member.roles.highest.position <= etiketlenenKişi.roles.highest.position) return message.channel.send(`<a:dikkatbe:821365355040735272> **Senden üstte/aynı pozisyonda bir kişiyi kayıtsıza atamazsın!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

etiketlenenKişi.roles.set([ayarlar.kayıtsızRol])
etiketlenenKişi.setNickname(`${ayarlar.tag} İsim ${ayarlar.sembol} Yaş`)

message.react(`<a:checkedbutblack:821365356249350149>`)

message.channel.send(arwEmbed.setDescription(`Kullanıcı başarıyla kayıtsıza (<@&${ayarlar.kayıtsızRol}>) atıldı!`))//Matthe arweneyi çok seviyorrr

}
exports.config = {
    name: "kayıtsız",
    guildOnly: true,
    aliases: ["unregistered", "kayitsiz", "unreg", "unregister"]
}