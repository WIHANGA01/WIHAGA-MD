const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 


let des = `*👨‍💻 Hello ${pushname}*

⚡𝗛𝗘𝗟𝗟𝗢𝗪 ┇ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⚡

👋🏻𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪 👋🏻
┗━━━━━━━━━━◯







┏━━━━━━━━━━
↪️ 𝗧𝗬𝗣𝗘 𝗧𝗢 .𝗺𝗲𝗻𝘂 𝗚𝗘𝗧 𝗖𝗠𝗗 𝗟𝗜𝗦𝗧 ⃟
┃
┃━━━━━━━━━━━
┃
↪️ 𝗧𝗬𝗣𝗘 𝗧𝗢 .𝘀𝘆𝘀𝘁𝗲𝗺 𝗚𝗘𝗧 𝗕𝗢𝗧 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢⃟
┃
┃━━━━━━━━━━━
┃
↪️ 𝗙𝗔𝗦𝗧 𝗪𝗛𝗔𝗧𝗦 𝗔𝗣𝗣 𝗕𝗢𝗧
┃
┃━━━━━━━━━━━
┃
꧁⚒️ ᴡɪʜᴀɴɢᴀ-ᴍᴅ ⚒️꧂
┃
┗━━━━━━╋━━━━━`


return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/oILqBWB.jpeg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
