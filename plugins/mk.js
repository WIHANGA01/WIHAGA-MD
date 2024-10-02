const config = require('../config')
const {cmd , commands} = require('../command')


cmd({
    pattern: "mk",
    react: "🥱",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s repo link",
    category: "main",
    use: 'MK',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let tex = `

මොකුත් නැහ් ඔයා M.K
`


return await conn.sendMessage{,caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
