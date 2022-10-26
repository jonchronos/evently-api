"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = (aid) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({ aid }, process.env.PRIVATE_KEY, {
            expiresIn: '48h'
        }, (err, token) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateToken = generateToken;
