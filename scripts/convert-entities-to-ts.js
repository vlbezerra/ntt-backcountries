const { readdirSync } = require('fs');
const { resolve } = require('path');
const { execSync } = require('child_process');

const files = readdirSync(resolve(__dirname, '..', 'srv')).filter((file) => file.includes('.cds'));

for (const file of files) {
    const srvPath = resolve(__dirname, '..', 'srv');
    const srcPath = resolve(__dirname, '..', 'src');
    const cdsToConvert = `--cds ${srvPath}/${file}`;
    const outputFile = `--output ${srcPath}/entities/entities.ts`;
    execSync(`npx cds2types ${cdsToConvert} ${outputFile} -f`);
}
const genPath = resolve(__dirname, '..', 'gen')
execSync(`cds build && copy .cdsrc.json ${genPath}\\srv`);
