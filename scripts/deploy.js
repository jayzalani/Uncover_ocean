/*const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();
  const balance = await deployer.getBalance();
  const Marketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  const data = {
    address: marketplace.address,
    abi: JSON.parse(marketplace.interface.format('json'))
  }

  //This writes the ABI and address to the mktplace.json
  fs.writeFileSync('./src/Marketplace.json', JSON.stringify(data))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  */ const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  try {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const balance = await deployer.getBalance();
    console.log("Account balance:", ethers.utils.formatEther(balance), "RBTC");

    const Marketplace = await ethers.getContractFactory("NFTMarketplace");
    const marketplace = await Marketplace.deploy();

    await marketplace.deployed();

    console.log("NFTMarketplace deployed to:", marketplace.address);

    const data = {
      address: marketplace.address,
      abi: JSON.parse(marketplace.interface.format('json'))
    }

    const filePath = './src/Marketplace.json';
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Contract data written to ${filePath}`);

    console.log("Deployment completed successfully!");
  } catch (error) {
    console.error("Error in deployment:", error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unhandled error:", error);
    process.exit(1);
  }); 
