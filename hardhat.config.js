/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { ETH_API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {
         chainID: 1337
      },
      goerli: {
         url: ETH_API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
      arbitrumGoerli: {
	      url: "https://goerli-rollup.arbitrum.io/rpc",
	      chainId: 421613,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
