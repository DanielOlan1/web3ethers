// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract BasicDemo {
    uint256 private value;

    function setValue(uint256 _newValue) public {
        value = _newValue;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}