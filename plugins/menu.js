const config = require('../config')
const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//===========menu========
cmd({
    pattern: "menu",
    react: "📃",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let tex = `
> *👋. *HEY* *FREIND* ジ,

> ɪ ᴀᴍ ᴀɴ ᴀᴜᴛᴏᴍᴀᴛᴇᴅ ꜱʏꜱᴛᴇᴍ ⚡ *(ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ)* ᴛʜᴀᴛ ᴄᴀɴ ʜᴇʟᴘ ᴛᴏ ᴅᴏ ꜱᴏᴍᴇᴛʜɪɴɢ, ꜱᴇᴀʀᴄʜ ᴀɴᴅ ɢᴇᴛ ᴅᴀᴛᴀ / ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴏɴʟʏ ᴛʜʀᴏᴜɢʜ *ᴡʜᴀᴛꜱᴀᴘᴘ.🌐*

🦄 ∆ ◦ _*ɴᴀᴍᴇ ʙᴏᴛ*_ : 💃𝐐𝐔𝐄𝐄𝐍 𝐊𝐄𝐍𝐙𝐈 𝐌𝐃 🤍
🦄 ∆ ◦ _*ᴄʀᴇᴀᴛᴏʀ*_ : *DanuXzz* ジ 🤍
🦄 ∆ ◦ _*ᴠᴇʀsɪᴏɴs*_ : 1.0.0 ( *ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs* )🤍
🦄 ∆ ◦ _*ᴛʏᴘᴇ sᴄʀɪᴘᴛ*_ : *ᴘʟᴜɢɪɴs* 🤍
🦄 ∆ ◦ _*ᴊᴏɪɴ ᴍʏ ɢʀᴏᴜᴘ*_ :  ~https://whatsapp.com/channel/0029Va8f3smKWEKvPUzXQv34~  🤍
🦄 ∆ ◦ _*ᴄᴏɴᴛᴀᴄᴛ*_ : ~https://wa.me/94740460412~ 🤍

> *ʜɪ 💗, ʙᴇғᴏʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴍᴇɴᴜ 📁, ᴘʟᴇᴀsᴇ ʀᴇᴀᴅ ᴛʜᴇ ʀᴜʟᴇs ғᴏʀ ᴜsɪɴɢ ᴛʜᴇ ʙᴏᴛ* 💠

*🚫𝟷. sᴘᴀᴍ ʙᴏᴛs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟸. ᴄᴀʟʟɪɴɢ ʙᴏᴛs ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*🚫𝟹. ᴄᴀʟʟɪɴɢ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*
*⛔𝟺. sᴘᴀᴍ ᴛᴏ ɴᴏ ᴏᴡɴᴇʀ ɪs ᴘʀᴏʜɪʙɪᴛᴇᴅ.❕*

┌ 🅥 *ＤＯＷＮＬＯＡＤＥＲ* 🅥
│◦ .ғʙ <ᴜʀʟ> 🌸
│◦ .ᴀᴘᴋ <ϙᴜᴇʀʏ> 🌸
│◦ .ɪɢ <ᴜʀʟ> 🌸
│◦ .ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ> 🌸
│◦ .ᴛɪᴋᴛᴏᴋ <ᴜʀʟ> 🌸
│◦ .ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ> 🌸
│◦ .ꜱᴏɴɢ <ϙᴜᴇʀʏ> 🌸
│◦ .ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ> 🌸
└ ◦ .ʏᴛs <ϙᴜᴇʀʏ> 🌸

┌ 🅥 *ＡＩ* 🅥
└ ◦ .ᴀɪ <ᴛᴇxᴛ> 🌸

┌ 🅥 *ＯＷＮＥＲ* 🅥
│◦ .ʙᴀɴᴄʜᴀᴛ 🌸
│◦ .ʙᴀɴ @ᴜsᴇʀ 🌸
│◦ .ᴜɴʙᴀɴ 🌸
│◦ .ᴜɴʙᴀɴ @ᴜsᴇʀ 🌸
│◦ .ʙʟᴏᴄᴋ 🌸
│◦ .ᴜɴʙʟᴏᴄᴋ 🌸
│◦ >/=> 🌸
│◦ $ 🌸
│◦ .sᴇᴛᴘᴘ <ʀᴇᴘʟʏ ᴡɪᴛʜ ᴘʜᴏᴛᴏ> 🌸
└ ◦ .sᴇᴛʙɪᴏ 🌸

┌ 🅥 *ＧＲＯＵＰ* 🅥
│◦ .ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴍsɢ ᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴇʟ> 🌸
│◦ .sᴇᴛᴅᴇsᴄ <ᴛᴇxᴛ> 🌸
│◦ .ᴘʀᴏᴍᴏᴛᴇ 🌸
│◦ .ᴅᴇᴍᴏᴛᴇ 🌸
│◦ .ʜɪᴅᴇᴛᴀɢ 🌸
│◦ .ɪɴᴠɪᴛᴇ 🌸
│◦ .ᴋɪᴄᴋ 🌸
└ ◦ .ʟɪɴᴋ 🌸

┌ 🅥 *ＩＮＦＯ* 🅥
│◦ .ᴍᴇɴᴜ 🌸
│◦ .ᴘɪɴɢ 🌸
│◦ .ꜱʏꜱᴛᴇᴍ 🌸
└ ◦ .ᴀʟɪᴠᴇ 🌸

┌ 🅥 *ＣＯＮＶＥＲＴＥＲ* 🅥
│◦ .ᴛᴏᴍᴘ3 🌸
│◦ .ᴛᴏᴜʀʟ 🌸
└ ◦ .sᴛɪᴄᴋᴇʀ 🌸

*⚖️°𝙱𝚢 © Ｄａｒｋ Ｎｅｏｎ Ｃｙｂｅｒｚ •2024•* 💗
`


return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})