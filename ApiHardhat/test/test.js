const { expect, assert } = require("chai");
const { ethers } = require("hardhat");
const { impersonateFundErc20 } = require("../utils/utilities");
const ck = require("ckey");
const Oracle = require("@chainlink/contracts/src/v0.6/tests/MockV3Aggregator.sol");
const {
  abi,
} = require("../artifacts/contracts/interfaces/IERC20.sol/IERC20.json");
// console.log(abi);
const provider = ethers.provider; // obtiene provider desde ethers
const LINK = "0x779877A7B0D9E8603169DdbD7836e478b4624789";
const LINK_WHALE = "0x4281eCF07378Ee595C564a59048801330f3084eE";
let CHAINLINKCONTRACT;
/////////////////////////////////////////////////////////////////////////////////////

let oracleMock;
describe("Chainlink Contract", () => {
  beforeEach(async () => {
    // Get signer as signer
    signers = await ethers.getSigners(); // hardht-wallet
    const LINK_Contract = new ethers.Contract(LINK, abi, signers[0]);
    oracleMock = await deployMockContract(signers[0], Oracle.abi);
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
      //Check for volume
      let volume = await CHAINLINKCONTRACT.volume();

      console.log("volume before", volume);
      console.log("requestVolumeData");
      // console.log(CHAINLINKCONTRACT);

      const tx = await CHAINLINKCONTRACT.requestVolumeData();
      const receipt = await tx.wait();
      console.log(receipt);
      // Find the requestId from the emitted event
      const requestId = receipt.events[0].args.id;

      // Fulfill the request by the oracleMock
      await oracleMock.fulfillOracleRequest(
        requestId,
        ethers.utils.formatBytes32String("10000")
      );

      // console.log(result);

      // Check LINK balance after transaction
      signers = await ethers.getSigners(); // hardht-wallet

      const LINK_Contract = new ethers.Contract(LINK, abi, signers[0]);

      console.log(await LINK_Contract.balanceOf(CHAINLINKCONTRACT.address));

      //Check for volume
      volume = await CHAINLINKCONTRACT.volume();

      console.log("volume after", volume);
    });
  });
});
