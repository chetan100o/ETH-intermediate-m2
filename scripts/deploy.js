// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
import hre from "hardhat";

const mathOperations = await hre.ethers.deployContract("MathOperations");
await mathOperations.waitForDeployment();

console.log(`MathOperations contract deployed to ${await mathOperations.getAddress()}`);
