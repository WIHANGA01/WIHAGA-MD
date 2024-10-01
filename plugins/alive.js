const config = require('../config')
const {cmd , commands} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
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

//============ping=======
cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
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
👋🏻𝗛𝗘𝗬 𝗠𝗬 𝗙𝗥𝗜𝗘𝗡𝗗 ッ 👋🏻

> ⚖️ 𝙌𝙐𝙄𝙆 𝘽𝙊𝙏 ⚖️

> BOT CMD LIST

> ᵂᴵᴴᴬᴺᴳᴬ ᴹᴰ ᴮᴼᵀ ᴵˢ ⱽᴱᴿᴿʸ ᶠᴬˢᵀ ᴮᴼᵀ

🦄◁ 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 :
 𝚠𝚒𝚑𝚊𝚗𝚐𝚊-𝚖𝚍
🐱 ◁ 𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥 : 𝐖𝐈𝐇𝐀𝐍𝐆𝐀
🤍 ◁ 𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣 : +94769611502
┠───────────
🧬 ◁ 𝗚𝗥𝗢𝗨𝗣:https://chat.whatsapp.com/FHv6PtyT9VPDBCB93v77Zo
📡◁ 𝙍𝙀𝙋𝙊 :
🪄◁ 𝙁𝘽 : 𝚠𝚒𝚑𝚊𝚗𝚐𝚊 𝚊𝚗𝚞𝚑𝚊𝐬
🎊◁ 𝙏𝙄𝙆 𝙏𝙊𝙆: 𝚠𝚒_𝚘𝚏𝚏𝚒𝚌𝚒𝚊𝚕
🪅◁ 𝙔𝙏 : 𝚠𝚒_𝚘𝚏𝚏𝚒𝚌𝚒𝚊𝚕


┏━━━━━━━━━━━━●
┃
┃
◁◯😼 𝚆𝙸𝙷𝙰𝙽𝙶𝙰-𝙼𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳 𝙻𝙸𝚂𝚃 😼◯▷
┃
┃
┃
┗━━━━━━━━━━━━●


🧬𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙈𝙀𝙉𝙐🧬
━━━━━━━━━━━━━━●


 .ꜱᴏɴɢ

.ᴠɪᴅᴇᴏ

.ꜰʙ

.ᴛɪᴋᴛᴏᴋ

.ɪɴꜱᴛᴀ

.ᴀᴘᴋ

.ɪᴍɢ

💃🏼𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨💃🏼

━━━━━━━━━━━●━━●

.ꜱʏꜱᴛᴇᴍ

.ᴘɪɴɢ 

.ᴀʟɪᴠᴇ 

🧸𝗔𝗜 𝗠𝗘𝗡𝗨🧸
━━━━━━━━━━━━━━━●

.ᴀɪ

🐣𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🐣
━━━━━━━━━━━━━━●

.ʀᴇꜱᴛᴀʀᴛ

.ꜱʏꜱᴛᴇᴍ
┎━━━━━━━━━━━━●
┃
┃
┃🧸𝘰𝘸𝘯𝘦𝘳🧸 : 𝐖𝐈𝐇𝐀𝐍𝐆𝐀 ☬
┗━━━━━━━━━━━━◯
`


return await conn.sendMessage(from,{image: {url: config.MENU_IMG},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
