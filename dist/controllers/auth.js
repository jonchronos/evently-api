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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleSignIn = exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const generate_jsonwebtoken_1 = require("../helpers/generate-jsonwebtoken");
const validate_google_1 = require("../helpers/validate-google");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Look for user by email
        const findUser = yield user_1.default.findOne({ where: { email } });
        // Get dataValues as plain object
        const user = findUser === null || findUser === void 0 ? void 0 : findUser.get({ plain: true });
        //Verify is user is active
        if (!user.status) {
            return res.status(400).json({
                msg: 'invalid email or password - status'
            });
        }
        //Verify if password is correct
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400);
        }
        //Create JWT
        const token = yield (0, generate_jsonwebtoken_1.generateToken)(user.id);
        res.json({
            msg: 'Login successfully',
            token,
            user: {
                id: user.id,
                name: user.full_name,
                email: user.email,
            }
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'invalid email or password'
        });
    }
});
exports.login = login;
const googleSignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_token } = req.headers;
    try {
        //Verify if token is valid
        const payload = yield (0, validate_google_1.googleVerify)(id_token);
        // Look for user by email
        const findUser = yield user_1.default.findOne({ where: { email: payload === null || payload === void 0 ? void 0 : payload.email } });
        // Get dataValues as plain object
        let user = findUser === null || findUser === void 0 ? void 0 : findUser.get({ plain: true });
        //Verify if user exists and then create a new user
        if (!user) {
            const data = {
                full_name: payload === null || payload === void 0 ? void 0 : payload.name,
                email: payload === null || payload === void 0 ? void 0 : payload.email,
                password: 'google sign password',
                google: true
            };
            user = yield user_1.default.create(data);
        }
        //Verify if user is active
        if (!user.status) {
            return res.status(401).json({
                msg: 'contact support - user blocked'
            });
        }
        //Create JWT
        const token = yield (0, generate_jsonwebtoken_1.generateToken)(user.id);
        res.json({
            msg: 'Login successfully',
            token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
            }
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'invalid Google token'
        });
    }
});
exports.googleSignIn = googleSignIn;
