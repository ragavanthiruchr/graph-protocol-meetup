import { ethers } from "hardhat";

async function main() {
  const GraphToken = await ethers.getContractFactory("GraphToken");
  const graphtoken = await GraphToken.deploy();
  await graphtoken.deployed();

  console.log(`Graph Token is deployed to ${graphtoken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
