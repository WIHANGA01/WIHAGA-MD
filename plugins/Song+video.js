const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    react: "🎵",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("🪄𝗣𝗟𝗘𝗔𝗦𝗘 𝗚𝗜𝗩𝗘 𝗠𝗘 𝗦𝗢𝗡𝗚 𝗡𝗔𝗠𝗘 𝗢𝗥 𝗨𝗥𝗟 සිංදුවක නමක් හෝ ටයිටල් එකක් දෙන්න🪄")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
*•.¸♡ 💃WIHANGA 🤍 AUDIO-DOWNLOADER🎶 ♡¸.•*
╭━━━━━━━━━━━━━━━━●
| 🪄𝗧𝗜𝗧𝗟𝗘🪄: ${deta.title}㋡
|
| 🔮𝗧𝗜𝗠𝗘🔮: ${deta.timestamp}㋚
|
| 🔎𝗔𝗚𝗢🔎: ${deta.ago}㋚
|
| 👁️𝗩𝗜𝗘𝗪𝗦👁️ : ${deta.views}㋚
┃
┃
┃
┃
┃🧸𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗🧸
╰━━━━━━━━━━━━━━━●
`
await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod audio+ document

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"*powerd by wihanga-md*"},{quoted:mek})


  

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video dl=======

cmd({
    pattern: "video",
    react: "🎬",
    desc: "downlod video",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("❌Please give me url or title")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
*•.¸♡ 💃WIHANGA-MD 🤍 VIDEO-DOWNLOADER📽️ ♡¸.•*
|__________________________
| 🎠title : ${deta.title}
|
| 🎠time : ${deta.timestamp}
|
| 🎠ago : ${deta.ago}
|
| 🎠views : ${deta.views}
|__________________________

POWERED by *⚡ WIHANGA-MD 🤍*

`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod video + document 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video  message 
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"*powerd by wihanga-md*"},{quoted:mek})


  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
