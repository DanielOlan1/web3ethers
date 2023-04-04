const { ReadFile, SaveFile } = require("./services/rwFile.js");
const coinGecko = ReadFile("allCoinGeckoTokens");
console.log(coinGecko.length);
const axios = require("axios");
const main = async () => {
  // ethereum
  //polygon-pos
  // arbitrum-one;
  // optimistic - ethereum;
  // avalanche
  // fantom
  blockchain = "arbitrum-one";

  tokens = [];
  for (let i = 0; i < coinGecko.length; i++) {
    if (blockchain in coinGecko[i].platforms) {
      var obj = {
        id: coinGecko[i]["id"],
        address: coinGecko[i]["platforms"][blockchain],
      };
      tokens.push(obj);
    }
  }
  console.log(tokens);
  console.log(tokens.length);
  await sleep(3000);

  //api.coingecko.com/api/v3/coins/polygon-pos/contract/0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3
  // const response = await fetch(url);
  tokensA = [];
  // for (let i = 0; i < 3; i++) {
  for (let i = 0; i < tokens.length; i++) {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${blockchain}/contract/${tokens[i].address}`;
      const response = await axios.get(url);
      tokens[i].rank = response.data.market_data.market_cap_rank;
      tokens[i].index = i;
      console.log(i, tokens[i]);
      await sleep(10000);
    } catch (e) {
      console.log(i, "\nERROR waiting 60 seconds\n");
      await sleep(60000);
      // i = i;
    }
  }

  SaveFile(tokens, blockchain + "_Tokens");
  // for (var key in response.data.market_data.market_cap_rank) {
  //   console.log(key);
  // }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
main();
