import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();
  const contract_admin = accounts[0];
  const contract_address = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const amount = ethers.utils.parseUnits("10", 18);

  const GraphToken = await ethers.getContractFactory("GraphToken");
  const graphtoken = await GraphToken.attach(contract_address);
  await graphtoken.connect(contract_admin).transfer(accounts[1].address, amount);

  console.log(`Graph Token is transferred to ${accounts[1].address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
