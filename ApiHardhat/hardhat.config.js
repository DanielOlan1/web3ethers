require("@nomicfoundation/hardhat-toolbox");
const ck = require("ckey");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat", //red para probar el npx test

  networks: {
    hardhat: {
      forking: {
        url: ck.ARBITRUM_URL,
      },
    },
    localhost: {
      url: "http://localhost:8545",
      accounts: {
        mnemonic: "tu frase mnemónica aquí",
      },
    },
    arbitrum: {
      url: ck.ARBITRUM_URL,
      chainId: 42161,
      accounts: [
        "9dc8c652a16755e58fe2ffae9991c895174f3746022b2a474f8d89694b4dc312",
      ],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
