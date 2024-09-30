const config = require('../config')
const {cmd , commands} = require('../command')


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

> wihanga-md menu list
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
