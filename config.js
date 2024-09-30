const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNNlQbgI#PYCMry0M_0eacsvxAUI0GbG54-RgdTe9BQn_5esfR1E",
ALIVE_IMG : process.env.ALIVE_IMG || "https://github.com/user-attachments/assets/c5048f76-6400-456e-938a-962ab0111337",
ALIVE_MSG : process.env.ALIVE_MSG || "*WIHANGA-MD ALLIVE NOW (TYPE MENU TO GET COMMAND LIST)*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
