// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";

contract CahinLinkPlayground is ChainlinkClient, ConfirmedOwner {
    using Chainlink for Chainlink.Request;

    uint256 public volume;
    bytes32 private jobId;
    uint256 private fee;

    event RequestVolume(bytes32 indexed requestId, uint256 volume);

    constructor() ConfirmedOwner(msg.sender) {
        setChainlinkToken(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        setChainlinkOracle(0x6090149792dAAeE9D1D568c9f9a6F6B46AA29eFD);
        jobId = "ca98366cc7314957b8c012c72f05aeeb";
        fee = (1 * LINK_DIVISIBILITY) / 10; // 0,1 * 10**18 (Varies by network and job)
    }

    function requestVolumeData() public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );

        // Set the URL to perform the GET request on
        req.add(
            "get",
            "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD"
        );

        // Set the path to find the desired data in the API response, where the response format is:
        // {"RAW":
        //   {"ETH":
        //    {"USD":
        //     {
        //      "VOLUME24HOUR": xxx.xxx,
        //     }
        //    }
        //   }
        //  }
        // request.add("path", "RAW.ETH.USD.VOLUME24HOUR"); // Chainlink nodes prior to 1.0.0 support this format
        req.add("path", "RAW,ETH,USD,VOLUME24HOUR"); // Chainlink nodes 1.0.0 and later support this format

        // Multiply the result by 1000000000000000000 to remove decimals
        int256 timesAmount = 10 ** 18;
        req.addInt("times", timesAmount);

        // Sends the request
        return sendChainlinkRequest(req, fee);
    }

    function fulfill(
        bytes32 _requestId,
        uint256 _volume
    ) public recordChainlinkFulfillment(_requestId) {
        emit RequestVolume(_requestId, _volume);
        volume = _volume;
    }

    /**
     * Allow withdraw of Link tokens from the contract
     */
    function withdrawLink() public onlyOwner {
        LinkTokenInterface link = LinkTokenInterface(chainlinkTokenAddress());
        require(
            link.transfer(msg.sender, link.balanceOf(address(this))),
            "Unable to transfer"
        );
    }

    function testFunction() public returns (address) {
        console.log("TEST FUNCTION");

        return address(0);
    }

    //////////////////////////////////////////////////

    // // function requestSportsEvent() public onlyOwner {
    // //     Chainlink.Request memory req = buildChainlinkRequest(
    // //         jobId,
    // //         address(this),
    // //         this.fulfillResult.selector
    // //     );
    // //     req.add("get", "https://sofasport.p.rapidapi.com/v1/events/schedule/");
    // //     req.add(
    // //         "headers",
    // //         "X-RapidAPI-Key:2393f87588msh0c8df3b6ecf540dp1cde7cjsn6a9e8302348b"
    // //     );
    // //     sendChainlinkRequestTo(oracle, req, fee);
    // // }

    // function fulfillResult(
    //     bytes32 _requestId,
    //     uint256 _result
    // ) public recordChainlinkFulfillment(_requestId) {
    //     result = _result;
    // }

    // function withdrawLink() external onlyOwner {
    //     LinkTokenInterface linkToken = LinkTokenInterface(
    //         chainlinkTokenAddress()
    //     );
    //     require(
    //         linkToken.transfer(msg.sender, linkToken.balanceOf(address(this))),
    //         "Unable to transfer"
    //     );
    // }
}
