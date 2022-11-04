"use strict";
exports.__esModule = true;
/**
* @type import('hardhat/config').HardhatUserConfig
*/
var dotend = require('dotenv');
dotend.config();
require("@nomiclabs/hardhat-ethers");
var _a = process.env, API_URL = _a.API_URL, PRIVATE_KEY = _a.PRIVATE_KEY;
var config = {
    solidity: "0.8.4",
    defaultNetwork: "mumbai",
    networks: {
        hardhat: {},
        mumbai: {
            url: API_URL,
            accounts: ["0x".concat(PRIVATE_KEY)]
        }
    }
};
exports["default"] = config;
