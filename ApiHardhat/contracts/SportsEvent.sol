// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract SportsEvent is ChainlinkClient {
    uint256 public result;
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    address public owner;

    constructor() {
        setPublicChainlinkToken();
        oracle = 0x8AabF9e6Ee96e1Cd3F40C2dec7a6F8609e16c792; //Inserta la dirección del nodo Chainlink aquí
        jobId = "d5d699f1f9c6495f88a0be4d825c4c4f"; //Inserta el ID del trabajo Chainlink aquí
        fee = 0.1 * 10 ** 18; // 0.1 LINK
        owner = msg.sender; //Inicializar el propietario en el constructor
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    function requestSportsEvent() public onlyOwner {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfillResult.selector);
        req.add("get", "https://sofasport.p.rapidapi.com/v1/events/schedule/");
        req.add("headers", "X-RapidAPI-Key:2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b");
        sendChainlinkRequestTo(oracle, request, fee);

    }

    function fulfillResult(bytes32 _requestId, uint256 _result) public recordChainlinkFulfillment(_requestId) {
        result = _result;
    }

    function withdrawLink() external onlyOwner {
        LinkTokenInterface linkToken = LinkTokenInterface(chainlinkTokenAddress());
        require(linkToken.transfer(msg.sender, linkToken.balanceOf(address(this))), "Unable to transfer");
    }
}