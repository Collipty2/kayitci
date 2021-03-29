// Arwene & Matthe tarafından kodlanmıştır!

const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")//Matthe#1000
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)//Matthe#1000
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.on('message', async message => {  
  if(message.content === 'c!tag') {
    message.channel.send(`\`${ayarlar.tag}\``)//Matthe#1000
  }
  })

client.on("ready", () => {
    console.log(chalk.redBright(`tm`))
})

client.on("guildMemberAdd", async (member) => {
  let arwSayılar = {
    "0": `${ayarlar.sifirEmoji}`,
    "1": `${ayarlar.birEmoji}`,
    "2": `${ayarlar.ikiEmoji}`,
    "3": `${ayarlar.ucEmoji}`,
    "4": `${ayarlar.dortEmoji}`,
    "5": `${ayarlar.besEmoji}`,
    "6": `${ayarlar.altiEmoji}`,
    "7": `${ayarlar.yediEmoji}`,
    "8": `${ayarlar.sekizEmoji}`,
    "9": `${ayarlar.dokuzEmoji}`//Matthe#1000
}
  function userInfo(user, message) {
let cetoplam = message.guild.memberCount

  let toplam =  
    `${cetoplam}`
      .split("")
      .map(c => arwSayılar[c] || c)
      .join("")
  }
const arwKanal = client.channels.cache.get(ayarlar.hosgeldinKanal)
let arwMember = member.user
let arwZaman = new Date().getTime() - arwMember.createdAt.getTime()
const arw = `Ve senin hesabın sunucumuza kayıt olmak için tüm şartları karşılıyor! <a:checkedbutblack:821365356249350149>`//Arwene#0836
if(arwZaman < 1296000000) {
  arw = `Ama senin hesabın sunucumuza kayıt olmak için daha çok genç!<a:dikkatbe:821365355040735272>`//Matthe#1000
}
  
member.roles.add(ayarlar.kayıtsızRol)
member.roles.add(ayarlar.kayıtsızRol)
member.roles.add(ayarlar.kayıtsızRol)//Arwene#0836

member.setNickname(`${ayarlar.tag} İsim ${ayarlar.sembol} Yaş`)
arwKanal.send(`
Sunucumuza hoş geldin, ${member}! Sayende sunucumuz ${member.guild.memberCount.toString().split("").map(a => client.emojis.cache.get(arwSayılar[a])).join("")} kişi.

Sunucumuza kayıt olmak için The Collipsia kanallarından birine girmelisin!

Hesabın 15 Günden Az Bir Süredir Discordda İse Senin Kayıt İşlemlerini Yapamayız.

${arw}

Ceza işlemlerin <#${ayarlar.rulesKanal}> kanalını okuduğun varsayılarak uygulanır. <@&${ayarlar.hosgeldinMesajYetkili}>
`)
  
})

client.login(process.env.TOKEN)

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });
//Matthe arweneyi çok seviyorrr
//-----------------------TAG-ROL----------------------\\     
    
    client.on("userUpdate", async (losxstg, yeni) => {
      var sunucu = client.guilds.cache.get(ayarlar.sunucu); 
      var uye = sunucu.members.cache.get(yeni.id);
      var tag = (ayarlar.tag); 
      var tagrol = (ayarlar.tagRol); 
      var logKanali = (ayarlar.sohbetKanal); 
    
      if (!sunucu.members.cache.has(yeni.id) || yeni.bot || losxstg.username === yeni.username) return;
      
      if ((yeni.username).includes(tag) && !uye.roles.cache.has(tagrol)) {
        try {
          await uye.roles.add(tagrol);
          await uye.send(`Tagımızı aldığın için teşekkürler! Aramıza hoş geldin.`);
          await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı alarak aramıza katıldı!`));
        } catch (err) { console.error(err) };
      };
      
      if (!(yeni.username).includes(tag) && uye.roles.cache.has(tagrol)) {
        try {
          await uye.roles.remove(uye.roles.cache.filter(rol => rol.position >= sunucu.roles.cache.get(tagrol).position));
          await uye.send(`Tagımızı bıraktığın için ekip rolü ve yetkili rollerin alındı! Tagımızı tekrar alıp aramıza katılmak istersen;\nTagımız: **${tag}**`);
          await client.channels.cache.get(logKanali).send(new Discord.MessageEmbed().setColor('RED').setDescription(`${yeni} adlı üye tagımızı bırakarak aramızdan ayrıldı!`));
        } catch(err) { console.error(err) };
      };
    });
    //-----------------------TAG-ROL----------------------\\   
 
    //----------------------TAG-KONTROL----------------------\\     
    
    client.on("guildMemberAdd", member => {
      let sunucuid = (ayarlar.sunucu); 
      let tag = (ayarlar.tag);
      let rol = (ayarlar.tagRol); 
    if(member.user.username.includes(tag)){
    member.roles.add(rol)
      const tagalma = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setDescription(`<@${member.id}> adlı kişi sunucumuza taglı şekilde katıldı!`)
          .setTimestamp()
         client.channels.cache.get(ayarlar.sohbetKanal).send(tagalma)
    }
    })
    
    //-----------------------TAG-KONTROL----------------------\\  