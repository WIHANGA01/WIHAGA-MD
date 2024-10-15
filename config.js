const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "F3kUUDga#rdxuX8ah7n4h_Hgx_mOhpcntF972lqIZBfVhrJ0yAUs", 
MONGODB: process.env.MONGODB || "mongodb://mongo:ZOHuvZUjalWCSIOaChWEbVSLoCdVDPTE@junction.proxy.rlwy.net:42713",
PING_IMG : process.env.PING_IMG || "https://github.com/user-attachments/assets/5970bd48-8cd1-40e9-8c0d-4fad372a1d89",
SYS_IMG : process.env.SYS_IMG || "https://github.com/user-attachments/assets/813ecbd6-bf45-4766-a83d-79df76e77f14",
MENU_IMG : process.env.MENU_IMG || "https://github.com/user-attachments/assets/f803fcf9-e171-4096-89a7-8d21c49e912c",
REPO_IMG : process.env.REPO_IMG || "https://github.com/user-attachments/assets/84ad21e9-b5df-411b-a453-369abd8b4253",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/1db105d7-0068-4879-b1fc-fece3c5f18b4",
ALIVE_MSG : process.env.ALIVE_MSG || "╭┄┄┄┄┄┄┄┄┄◯\n┆⚙️ 𝙒𝙄𝙃𝘼𝙉𝙂𝘼-𝙈𝘿 𝘼𝙇𝙄𝙑𝙀  ⚙️┆\n┆\n┆\n┆📜𝙏𝙔𝙋𝙀. 𝙢𝙚𝙣𝙪 𝙂𝙀𝙏\n┆𝘾𝙈𝘿 ┆𝙇𝙄𝙎𝙏📜\n┆\n┆🧬𝙏𝙔𝙋𝙀 .𝙥𝙞𝙣𝙜 𝘾𝙃𝙀𝙆 ┆𝙎𝙋𝙀𝙀𝘿🧬\n┆\n┆⏳𝙏𝙔𝙋𝙀 .𝙧𝙪𝙣𝙩𝙮𝙢𝙚 𝘾𝙃𝙀𝙆 ┆𝙍𝙐𝙈𝙏𝙄𝙈𝙀⏳\n┆\n┆⚒️𝘽𝙊𝙏 𝙋𝙍𝙀𝙁𝙄𝙓 ( . )⚒️\n┆\n┆\n┆\n┆🎐◁ ᴡɪʜᴀɴɢᴀ-ᴍᴅ⃞ ㋡\n┆\n╰┄┄┄┄┄┄┄┄┄◯",
AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || "true",
AUTO_REPLY : process.env.AUTO_REPLY || "true",
AUTO_STIKER : process.env.AUTO_STIKER || "true",
AUTO_VOICE : "true",
AUTO_STIKER : "true",
AUTO_REPLY : "true",
};
