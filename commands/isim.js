const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(arwww => message.member.roles.cache.has(arwww)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:dikkatbe:821365355040735272> **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`<a:dikkatbe:821365355040735272> **İsim değiştirmek için bir kişi etiketlemelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))

const isim = args[1];
const yaş = args[2];
if(!isim) return message.channel.send(`<a:dikkatbe:821365355040735272> **İsim değiştirmek için bir isim belirtmelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
if(!yaş) return message.channel.send(`<a:dikkatbe:821365355040735272> **İsim değiştirmek için için bir yaş belirtmelisin!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))
if(isNaN(yaş)) return message.channel.send(`<a:dikkatbe:821365355040735272> **Belirttiğin yaş rakamlardan oluşmalı!**`).then(message.react(`<a:dikkatbe:821365355040735272>`))

etiketlenenKişi.setNickname(`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}`)

message.react(client.emojis.cache.get(ayarlar.yes))

const arwEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Kullanıcının ismi \`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}\` olarak değiştirildi!`)//Matthe arweneyi çok seviyorrr
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(arwEmbed)

db.push(`isimler.${etiketlenenKişi.id}`, {
İsim: isim,
Yaş: yaş,
Yetkili: message.author.id
})

}
exports.config = {
    name: "isim",
    guildOnly: true,
    aliases: ["i", "nick"]
}