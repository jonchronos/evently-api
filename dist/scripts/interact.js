"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintNFT = void 0;
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const hardhat_1 = require("hardhat");
const contract = require("../artifacts/contracts/NFT.sol/MyToken.json");
// declare var network: any
const network = 'maticmum';
// provider - Alchemy
const alchemyProvider = new hardhat_1.ethers.providers.AlchemyProvider(network, API_KEY);
// signer - you
const signer = new hardhat_1.ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// contract instance
const NFTContract = new hardhat_1.ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
function mintNFT() {
    return __awaiter(this, void 0, void 0, function* () {
        const safeMint = yield NFTContract.safeMint('0xC68AD99ffbe1978586fD62F83e9991695Ca3D056', 'ipfs://QmSW1mva6B7MXMhZfiShF8LxtbDkfyB2yD4MCc1xagULrZ');
        console.log("Minting NFT...");
        yield safeMint.wait();
        console.log("The message is: " + safeMint);
        console.log('NFT minted successfuly');
        const balance = yield NFTContract.balanceOf('0xC68AD99ffbe1978586fD62F83e9991695Ca3D056');
        console.log('Your balance is: ', balance);
        return CONTRACT_ADDRESS;
    });
}
exports.mintNFT = mintNFT;
mintNFT();
