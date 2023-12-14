const write = require('./modules/write');
const read = require('./modules/read');

const path = require('path');
const pathFile = path.resolve(__dirname, '..', 'document.json');

// const people = [
//   { name: 'João' },
//   { name: 'Maria' },
//   { name: 'Pedro' },
//   { name: 'Ana' },
// ];

// const json = JSON.stringify(people, '', 2);
// write(pathFile, json);

const renderData = (dataFile) => {
  const parseData = JSON.parse(dataFile);

  parseData.forEach((element) => {
    console.log(element.name);
  });
};

const readFile = async (readPath) => {
  const data = await read(readPath);
  renderData(data);
};

readFile(pathFile);

// const result = readFile(pathFile).then((response) => console.log(response));
