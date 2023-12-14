const fs = require('fs').promises;

module.exports = (pathFile, file, flag = { flag: 'w' }) => {
  fs.writeFile(pathFile, file, flag);
};
