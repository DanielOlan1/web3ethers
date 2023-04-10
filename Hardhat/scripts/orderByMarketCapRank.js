const { ReadFile, SaveFile } = require("../services/rwFile.js");
const tokens = ReadFile("arbitrum-one_Tokens");
// const { Parser } = require("@json2csv/plainjs");

console.log(tokens.length);
tokens.sort((a, b) => a.rank - b.rank);

const filteredData = tokens.filter((item) => item.rank !== null);

console.log(filteredData);
// console.log(tokens);
console.log(filteredData.length);
console.log(filteredData[300]);
console.log(filteredData[101]);

const first100 = filteredData.slice(0, 100);

console.log(first100);

SaveFile(first100, "arbitrum-pos_TokensAll");
