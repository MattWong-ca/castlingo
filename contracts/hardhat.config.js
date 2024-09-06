require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    'linea-testnet': {
      url: "https://rpc.goerli.linea.build/",
      accounts: [process.env.PRIVATE_KEY]
    },
    'linea-sepolia': {
      url: "https://rpc.sepolia.linea.build",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};