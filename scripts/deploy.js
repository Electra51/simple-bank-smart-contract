
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying with account:", deployer.address);

  const SimpleBank = await hre.ethers.getContractFactory("SimpleBank");

  const simpleBank = await SimpleBank.deploy();

  await simpleBank.waitForDeployment();

  console.log("SimpleBank deployed to:", await simpleBank.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
