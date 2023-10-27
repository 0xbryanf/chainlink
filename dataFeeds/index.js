const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("");
const aggregatorV3InterfaceABI = require("./artifacts/@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol/AggregatorV3Interface.json")
const addr = "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43";
const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI.abi, provider);
priceFeed.latestRoundData().then((roundData) => {
    console.log("Latest Round Data", ethers.utils.formatUnits(roundData.answer, "wei"));
})