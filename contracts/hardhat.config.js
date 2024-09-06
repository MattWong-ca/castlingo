require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    'linea-testnet': {
      url: "https://rpc.goerli.linea.build/",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};