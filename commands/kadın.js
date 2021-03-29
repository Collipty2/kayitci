const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(arwww => message.member.roles.cache.has(arwww)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:dikkatbe:821365355040735272> **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
  
    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`<a:dikkatbe:821365355040735272> **Kaydetmek için bir kişi etiketlemelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
  
const isim = args[1];
const yaş = args[2];
if(!isim) return message.channel.send(`<a:dikkatbe:821365355040735272> **Kaydetmek için bir isim belirtmelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
if(!yaş) return message.channel.send(`<a:dikkatbe:821365355040735272> **Kaydetmek için bir yaş belirtmelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
if(isNaN(yaş)) return message.channel.send(`<a:dikkatbe:821365355040735272> **Belirttiğin yaş rakamlardan oluşmalı!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
  
etiketlenenKişi.roles.add(ayarlar.kadınRol)
etiketlenenKişi.roles.add(ayarlar.kadınRol2)
etiketlenenKişi.roles.add(ayarlar.kadınRol1)
etiketlenenKişi.roles.remove(ayarlar.kayıtsızRol)
etiketlenenKişi.setNickname(`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}`)

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Kullanıcının ismi \`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}\` olarak değiştirildi ve <@&${ayarlar.kadınRol1}>, <@&${ayarlar.kadınRol2}> ve <@&${ayarlar.kadınRol}> rolleri verildi!`)
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(arwEmbed)

db.push(`isimler.${etiketlenenKişi.id}`, {
İsim: isim,
Yaş: yaş,
Yetkili: message.author.id
})

db.add(`kadinTeyit.${message.member.id}`, `1`)
db.add(`toplamTeyit.${message.member.id}`, `1`)

client.channels.cache.get(ayarlar.sohbetKanal).send(`${etiketlenenKişi} **kaydolarak sunucuya giriş yaptı. Hoşgeldin!**`)
  
}
exports.config = {
    name: "kadın",
    guildOnly: true,
    aliases: ["k", "female", "kız"]
}