const fs = require('fs').promises;
const path = require('path');

async function removeLogs() {
    const logsDir = path.join(__dirname, 'logs');

    try {
        const dirExists = await fs.stat(logsDir).catch(() => null);

        if (!dirExists) {
            console.log('Logs directory does not exist.');
            return;
        }

        const files = await fs.readdir(logsDir);

        for (const file of files) {
            const filePath = path.join(logsDir, file);
            await fs.unlink(filePath);
            console.log(`delete files ${file}`);
        }

        await fs.rmdir(logsDir);
        console.log('Logs directory removed.');
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

removeLogs();
