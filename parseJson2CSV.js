const { ReadFile, SaveFile } = require("./services/rwFile.js");
const tokens = ReadFile("polygon-pos_Tokens");
const { Parser } = require("@json2csv/plainjs");
console.log(tokens);

try {
  const parser = new Parser();
  const csv = parser.parse(tokens);
  console.log(csv);
} catch (err) {
  console.error(err);
}
