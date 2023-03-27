const { ReadFile, SaveFile } = require("../services/rwFile.js");
coinGecko = ReadFile("allCoinGeckoTokens");
console.log(coinGecko.length);

// ethereum
//polygon-pos
// arbitrum - one;
// optimistic - ethereum;
// avalanche
// fantom
blockchain = "arbitrum-one";

tokens = [];
for (let i = 0; i < coinGecko.length; i++) {
  if (blockchain in coinGecko[i].platforms) {
    tokens.push(coinGecko[i]["platforms"][blockchain]);
  }
}
console.log(tokens);
console.log(tokens.length);

SaveFile(tokens, blockchain + "_Tokens");
