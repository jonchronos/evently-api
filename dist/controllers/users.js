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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserTickets = exports.getUser = exports.getUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../models/user"));
const booking_1 = __importDefault(require("../models/booking"));
// import { Auth } from '../types'
// Get all users
const getUsers = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll({
        where: {
            status: true
        },
        include: ['tickets']
    });
    res.json(users);
});
exports.getUsers = getUsers;
//Get a user by ID
const getUser = (_, res) => {
    res.json({
        msg: 'hola'
    });
};
exports.getUser = getUser;
// Get user's tickets
const getUserTickets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tickets = yield booking_1.default.findAll({
        where: { user_id: id }
    });
    res.json(tickets);
});
exports.getUserTickets = getUserTickets;
//Create new user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { full_name, email, password } = req.body;
    const user = yield user_1.default.create({
        full_name,
        email,
        // bcryptjs hash user password
        password: yield bcryptjs_1.default.hash(password, 10)
    });
    res.json({
        msg: 'User created',
        user
    });
});
exports.createUser = createUser;
// Update user by ID
const updateUser = (_, res) => {
    res.send('Hola desde typescript');
};
exports.updateUser = updateUser;
//Delete user by ID
const deleteUser = (_, res) => {
    res.send('Hola desde typescript');
};
exports.deleteUser = deleteUser;
