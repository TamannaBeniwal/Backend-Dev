import fs from "fs";
import path from "path";

const logFilePath = path.join("logs", "requests.log");

export const logger = (req, res, next) => {
    const start = Date.now();

    res.on("finish", () => {
        const end = Date.now();
        const responseTime = end - start;

        const log = `
[${new Date().toISOString()}] 
Method: ${req.method} 
URL: ${req.originalUrl} 
Status: ${res.statusCode} 
Time: ${responseTime}ms
-----------------------------------`;

        fs.appendFile(logFilePath, log, (err) => {
            if (err) console.error("Logging error:", err);
        });
    });

    next();
};