
cmd({
    pattern: "repo",
    react: "🏷️",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.repo',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let tex = `

┏━━━━━━━━━━━━●
┃ 👋 𝙒𝙄𝙃𝘼𝙉𝙂𝘼-𝙈𝘿👋
┃
┠────────────
┃
┃
🪄 ◁ 𝙍𝙀𝙋𝙊 :
┃
┃
┃
🪄 ◁ 𝙔𝙏 𝘾𝙃𝘼𝙉𝙀𝙇 :
┃
┃
┃
🪄 ◁ 𝙒𝘼 𝗡𝗨𝗠𝗕𝗘𝗥 :
┃ 
┃
┃
┃ 
🪄 ◁ 𝙂𝙄𝙏𝙃 𝙃𝙐𝘽 : 𝙒𝙄𝙃𝘼𝙉𝙂𝘼01
┃
┃
┃
╰─────────────●


> 𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 🦄🧬⚖️

`


return await conn.sendMessage(from,{image: {url: config.MENU_IMG},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
