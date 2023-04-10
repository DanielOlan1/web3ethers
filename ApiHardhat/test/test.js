const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { impersonateFundErc20 } = require("../utils/utilities");
const ck = require("ckey");

const {
  abi,
} = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");
// console.log(abi);
const provider = ethers.provider; // obtiene provider desde ethers

/////////////////////////////////////////////////////////////////////////////////////

describe("Chainlink Contract", () => {
  beforeEach(async () => {
    // Get signer as signer
    signers = await ethers.getSigners(); // hardht-wallet

    // Configure our CahinLinkPlayground
    CahinLinkPlayground = await ethers.getContractFactory(
      "CahinLinkPlayground"
    );
    CHAINLINKCONTRACT = await CahinLinkPlayground.deploy();
    await CHAINLINKCONTRACT.deployed();
    console.log();

    // // Fund players with USDT
    // await impersonateFundErc20(
    //   USDT_Contract[0],
    //   USDT_WHALE,
    //   signers[0].address,
    //   initialFundingHuman
    // );
  });

  describe("Chainlink ", () => {
    it("testFunction", async () => {
      console.log("testFunction");
      // console.log(CHAINLINKCONTRACT);

      const result = await CHAINLINKCONTRACT.testFunction();
      console.log(result);
    });
    it("Chainlink", async () => {
      console.log("Chainlink");
    });
  });
});
