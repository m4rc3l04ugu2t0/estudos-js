const write = require('./modules/write');

const path = require('path');
const pathFile = path.resolve(__dirname, '..', 'document.json');

const people = [
  { name: 'João' },
  { name: 'Maria' },
  { name: 'Pedro' },
  { name: 'Ana' },
];
console.log('hcshilsd');

const json = JSON.stringify(people, '', 2);
write(pathFile, json);
