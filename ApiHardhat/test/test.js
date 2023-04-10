const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { impersonateFundErc20 } = require("../utils/utilities");
const ck = require("ckey");

const {
  abi,
} = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");
// console.log(abi);
const provider = ethers.provider; // obtiene provider desde ethers
const LINK = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const LINK_WHALE = "0x4281eCF07378Ee595C564a59048801330f3084eE";
let CHAINLINKCONTRACT;
/////////////////////////////////////////////////////////////////////////////////////
describe("Chainlink Contract", () => {
  beforeEach(async () => {
    // Get signer as signer
    signers = await ethers.getSigners(); // hardht-wallet
    const LINK_Contract = new ethers.Contract(LINK, abi, signers[0]);

    // Configure our CahinLinkPlayground
    CahinLinkPlayground = await ethers.getContractFactory(
      "CahinLinkPlayground"
    );
    CHAINLINKCONTRACT = await CahinLinkPlayground.deploy();
    await CHAINLINKCONTRACT.deployed();
    console.log();
    initialFundingHuman = "1";

    // Fund players with USDT
    await impersonateFundErc20(
      LINK_Contract,
      LINK_WHALE,
      CHAINLINKCONTRACT.address,
      initialFundingHuman
    );
  });

  describe("Chainlink ", () => {
    it("testFunction", async () => {
      console.log("testFunction");
      // console.log(CHAINLINKCONTRACT);

      const result = await CHAINLINKCONTRACT.testFunction();
      console.log(result);
    });

    it("ChainLink Balance", async () => {
      signers = await ethers.getSigners(); // hardht-wallet

      const LINK_Contract = new ethers.Contract(LINK, abi, signers[0]);

      console.log(await LINK_Contract.balanceOf(CHAINLINKCONTRACT.address));
    });

    it("requestVolumeData", async () => {
      console.log("requestVolumeData");
      // console.log(CHAINLINKCONTRACT);

      const result = await CHAINLINKCONTRACT.requestVolumeData();
      console.log(result);
    });
  });
});
