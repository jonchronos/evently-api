const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

import { ethers } from "hardhat";
const contract = require("../artifacts/contracts/NFT.sol/MyToken.json");

// declare var network: any

const network: string = 'maticmum'
// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network, API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const NFTContract = new ethers.Contract(CONTRACT_ADDRESS as string, contract.abi, signer);

export async function mintNFT() {
    const safeMint = await NFTContract.safeMint(
        '0xC68AD99ffbe1978586fD62F83e9991695Ca3D056',
        'ipfs://QmSW1mva6B7MXMhZfiShF8LxtbDkfyB2yD4MCc1xagULrZ'
    );
    console.log("Minting NFT...");

    await safeMint.wait();

    console.log("The message is: " + safeMint);
    console.log('NFT minted successfuly')

    const balance = await NFTContract.balanceOf('0xC68AD99ffbe1978586fD62F83e9991695Ca3D056')
    console.log('Your balance is: ', balance)

    return CONTRACT_ADDRESS
}

mintNFT()
