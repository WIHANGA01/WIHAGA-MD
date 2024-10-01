const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNNlQbgI#PYCMry0M_0eacsvxAUI0GbG54-RgdTe9BQn_5esfR1E",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/ac71a7f5-7272-4d0b-91ca-8461bbf3d5f9",
ALIVE_MSG : process.env.ALIVE_MSG || "👋🏻WIHANGA-MD ALIVE NOW👋🏻\n\n\💗💗💗💗💗💗💗💗\n\n\n*😼HOW CAN I HELP YOU😼\n\n\n\⛓️⛓️⛓️⛓️⛓️⛓️⛓️\n\n\n*🧬> bot owner : WIHANGA🧬",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
AUTO_VOICE:"true",
};
