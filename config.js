const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "vNNlQbgI#PYCMry0M_0eacsvxAUI0GbG54-RgdTe9BQn_5esfR1E",
MONGODB: process.env.enc.MONGODB || "mongodb://mongo:FIZQtJmBhmsWZQdozTkdfSQVDKQSNVjl@autorack.proxy.rlwy.net:42113",
};
