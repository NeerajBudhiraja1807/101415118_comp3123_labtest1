const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}

process.chdir(logsDir);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logsDir, fileName);
    
    fs.writeFileSync(filePath, `This is log file number ${i}.`, 'utf8');
    console.log(fileName);  
}
