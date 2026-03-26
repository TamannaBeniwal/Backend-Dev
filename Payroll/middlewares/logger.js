const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {

    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;

    const logFilePath = path.join(__dirname, '../logs/log.txt');

    fs.appendFileSync(logFilePath, logMessage);

    next();
};

module.exports = logger;