const os = require('os');
const fs = require('fs');

function logSystemInfo() {
  const info = `
Time: ${new Date().toISOString()}
Platform: ${os.platform()}
CPU Cores: ${os.cpus().length}
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
Total Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB
----------
`;

  fs.appendFile('system.log', info, (err) => {
    if (err) {
      console.error('Error writing log:', err);
    }
  });
}

setInterval(logSystemInfo, 5000);

console.log('System logger started...');
