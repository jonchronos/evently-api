"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @type import('hardhat/config').HardhatUserConfig
*/
const dotend = require('dotenv');
dotend.config();
// import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ethers");
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
};
exports.default = config;
