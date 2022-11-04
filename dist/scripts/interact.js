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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.mintNFT = void 0;
var API_KEY = process.env.API_KEY;
var PRIVATE_KEY = process.env.PRIVATE_KEY;
var CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
var hardhat_1 = require("hardhat");
var contract = require("../artifacts/contracts/NFT.sol/MyToken.json");
// declare var network: any
var network = 'maticmum';
// provider - Alchemy
var alchemyProvider = new hardhat_1.ethers.providers.AlchemyProvider(network, API_KEY);
// signer - you
var signer = new hardhat_1.ethers.Wallet(PRIVATE_KEY, alchemyProvider);
// contract instance
var NFTContract = new hardhat_1.ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);
function mintNFT() {
    return __awaiter(this, void 0, void 0, function () {
        var safeMint, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, NFTContract.safeMint('0xC68AD99ffbe1978586fD62F83e9991695Ca3D056', 'ipfs://QmSW1mva6B7MXMhZfiShF8LxtbDkfyB2yD4MCc1xagULrZ')];
                case 1:
                    safeMint = _a.sent();
                    console.log("Minting NFT...");
                    return [4 /*yield*/, safeMint.wait()];
                case 2:
                    _a.sent();
                    console.log("The message is: " + safeMint);
                    console.log('NFT minted successfuly');
                    return [4 /*yield*/, NFTContract.balanceOf('0xC68AD99ffbe1978586fD62F83e9991695Ca3D056')];
                case 3:
                    balance = _a.sent();
                    console.log('Your balance is: ', balance);
                    return [2 /*return*/, CONTRACT_ADDRESS];
            }
        });
    });
}
exports.mintNFT = mintNFT;
mintNFT();
