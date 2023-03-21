const { ReadFile, SaveFile } = require("./services/rwFile.js");
const tokens = ReadFile("polygon-pos_Tokens");
const { Parser } = require("@json2csv/plainjs");
tokens.sort((a, b) => a.rank - b.rank);

const filteredData = tokens.filter((item) => item.rank !== null);

console.log(filteredData);
// console.log(tokens);
console.log(filteredData.length);
console.log(filteredData[300]);
console.log(filteredData[101]);

const first100 = filteredData.slice(0, 100);

console.log(first100);

SaveFile(first100, "polygon-pos_Tokens100");
