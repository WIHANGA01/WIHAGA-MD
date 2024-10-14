const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "uM8UAAbQ#Wyhm6FCicpqCH7Q7-uFsPFuolqQlhTM-W2eu7iM9Imk", 
MONGODB: process.env.MONGODB || "mongodb://mongo:ZOHuvZUjalWCSIOaChWEbVSLoCdVDPTE@junction.proxy.rlwy.net:42713",
PING_IMG : process.env.PING_IMG || "https://github.com/user-attachments/assets/5970bd48-8cd1-40e9-8c0d-4fad372a1d89",
SYS_IMG : process.env.SYS_IMG || "https://github.com/user-attachments/assets/813ecbd6-bf45-4766-a83d-79df76e77f14",
MENU_IMG : process.env.MENU_IMG || "https://github.com/user-attachments/assets/f803fcf9-e171-4096-89a7-8d21c49e912c",
REPO_IMG : process.env.REPO_IMG || "https://github.com/user-attachments/assets/48434a6d-1ecd-4a02-a38f-aad39c7b573c",
ALIVE_MSG : process.env.ALIVE_MSG || "━━━━━━━━━━━━━●\n\n\👋🏻𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪👋🏻\n\━━━━━━━━━━━━●\n\n📃𝗧𝗬𝗣𝗘 .ᴍᴇɴᴜ 𝗚𝗘𝗧 𝗖𝗠𝗗 𝗟𝗜𝗦𝗧📃\n\n\━━━━━━━━━━━●\n\n\🔮𝗧𝗬𝗣𝗘 .ᴘɪɴɢ 𝗕𝗢𝗧 𝗦𝗣𝗘𝗘𝗗🔮\n\n\n━━━━━━━━━━●\n\n\n📡𝗧𝗬𝗣𝗘 .ꜱʏꜱᴛᴇᴍ 𝗚𝗘𝗧 𝗕𝗢𝗧 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢📡\n\n\n\n\n\꧁𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗꧂",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/2465f3dd-6592-4e96-a475-70958a758c93",
AUTO_READ_STATUS : process.env.AUTO_READ_STATUS || "true",
AUTO_REPLY : process.env.AUTO_REPLY || "true",
AUTO_STIKER : process.env.AUTO_STIKER || "true",
AUTO_VOICE : "true",
AUTO_STIKER : "true",
AUTO_REPLY : "true",
};
