const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("BasicDemo", function () {
  let basicDemo;

  beforeEach(async function () {
    const BasicDemo = await ethers.getContractFactory("BasicDemo");
    basicDemo = await BasicDemo.deploy();
    await basicDemo.deployed();
  });

  it("should set the value", async function () {
    const newValue = 42;
    await basicDemo.setValue(newValue);
    const value = await basicDemo.getValue();
    expect(value).to.equal(newValue);
  });

  it("should get the default value", async function () {
    const defaultValue = 0;
    const value = await basicDemo.getValue();
    expect(value).to.equal(defaultValue);
  });
});