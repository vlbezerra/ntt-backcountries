import fs from 'fs';
import childproc from 'child_process';

if (fs.existsSync('../package.json')) {
    // true at build-time, false at CF staging time
    childproc.execSync('npm install && npm run build', {
        cwd: '..',
        stdio: 'inherit'
    });
}