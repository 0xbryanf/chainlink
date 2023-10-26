import { Chainlink } from 'dev3-sdk';
import { ethers } from 'ethers';

const ethSDK = Chainlink.instance("https://ethereum.publicnode.com", Chainlink.PriceFeeds.ETH);

ethSDK.getFromOracle(ethSDK.feeds.USDC_ETH).then((res) => {
    console.log(ethers.utils.formatUnits(res.answer.toString(), 'ether') );
})