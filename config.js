const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNNlQbgI#PYCMry0M_0eacsvxAUI0GbG54-RgdTe9BQn_5esfR1E",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/ac71a7f5-7272-4d0b-91ca-8461bbf3d5f9",
ALIVE_MSG : process.env.ALIVE_MSG || "👋🏻𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪 👋🏻
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
┗━━━━━━╋━━━━━",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
