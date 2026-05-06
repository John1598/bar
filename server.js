const { spawn } = require('child_process');
const path = require('path');

// Ejecutamos el servidor escrito en TypeScript usando tsx
const child = spawn('npx', ['tsx', 'src/server.ts'], { 
    stdio: 'inherit',
    env: process.env,
    shell: true
});

child.on('close', (code) => {
    process.exit(code || 0);
});
