const { ethers } = require("hardhat");

async function main() {
  const BasicDemo = await ethers.getContractFactory("BasicDemo");
  const basicDemo = await BasicDemo.deploy();
  await basicDemo.deployed();
  console.log("BasicDemo contract deployed to:", basicDemo.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});