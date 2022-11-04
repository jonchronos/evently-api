/**
* @type import('hardhat/config').HardhatUserConfig
*/
const dotend = require('dotenv')
dotend.config()
import "@nomiclabs/hardhat-ethers";

const { API_URL, PRIVATE_KEY } = process.env;

const config = {
  solidity: "0.8.4",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}

export default config