cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename

},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let tex = `
╭┉┉┉┉┉┉┉┉┉┉
▮ *HEY WIHANGA-MD*
▮ *ALLIVE NOW*
▮ 💓💓💓💓💓💓
▮
▮
▮
▮
▮
▮
╰┉┉┉┉┉┉┉┉┉
`


return await conn.sendMessage(from,{image: {url: config.ALLIVE_IMG},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//===========menu========
