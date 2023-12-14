const fs = require('fs').promises;
const path = require('path');

const walk = async (files, rootDir) => {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);
    if (/\.git/g.test(fileFullPath)) continue;
    if (/node.modules/g.test(fileFullPath)) continue;

    if (stats.isDirectory()) {
      loadDir(fileFullPath);
      continue;
    }

    console.log(fileFullPath);
    // console.log(`${file}: ${stats.isDirectory() ? 'Diretório' : 'Arquivo'}`);
  }
};

const loadDir = async (rootDir) => {
  rootDir = rootDir || path.resolve(__dirname);

  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
};

loadDir('/home/m4rc2l0/dev/estudos-js');
