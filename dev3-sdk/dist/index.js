"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dev3_sdk_1 = require("dev3-sdk");
const ethers_1 = require("ethers");
const ethSDK = dev3_sdk_1.Chainlink.instance("https://ethereum.publicnode.com", dev3_sdk_1.Chainlink.PriceFeeds.ETH);
ethSDK.getFromOracle(ethSDK.feeds.USDC_ETH).then((res) => {
    console.log(ethers_1.ethers.utils.formatUnits(res.answer.toString(), 'ether'));
});
