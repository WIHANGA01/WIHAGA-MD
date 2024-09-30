const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNNlQbgI#PYCMry0M_0eacsvxAUI0GbG54-RgdTe9BQn_5esfR1E",
ALIVE_IMG : process.env.ALIVE_IMG || "https://telegra.ph/file/99312f6ecbfa4d9bfd3b4.jpg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",
};
