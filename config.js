const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNNlQbgI#PYCMry0M_0eacsvxAUI0GbG54-RgdTe9BQn_5esfR1E",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/ae20b04f-1083-487b-b325-0f0309338c36",
MENU_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/ad3dc519-0363-455a-a295-6860e942fd07",
REPO_IMG : process.env.REPO_IMG || "https://github.com/user-attachments/assets/62b77921-49e9-4c60-823b-7bca112fc1f6",
ALIVE_MSG : process.env.ALIVE_MSG || "━━━━━━━━━━━━━●\n\n\👋🏻𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪👋🏻\n\━━━━━━━━━━━━●\n\n📃𝗧𝗬𝗣𝗘 .ᴍᴇɴᴜ 𝗚𝗘𝗧 𝗖𝗠𝗗 𝗟𝗜𝗦𝗧📃\n\n\━━━━━━━━━━━●\n\n\🔮𝗧𝗬𝗣𝗘 .ᴘɪɴɢ 𝗕𝗢𝗧 𝗦𝗣𝗘𝗘𝗗🔮\n\n\n━━━━━━━━━━●\n\n\n📡𝗧𝗬𝗣𝗘 .ꜱʏꜱᴛᴇᴍ 𝗚𝗘𝗧 𝗕𝗢𝗧 𝗦𝗬𝗦𝗧𝗘𝗠 𝗜𝗡𝗙𝗢📡\n\n\n\n\n\꧁𝗪𝗜𝗛𝗔𝗡𝗚𝗔-𝗠𝗗꧂",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_STIKER: process.env.AUTO_STIKER || "true",
AUTO_VOICE:"true",
AUTO_REPLY:"true",
AUTO_STIKER:"true",
};
