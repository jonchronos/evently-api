"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database = new sequelize_1.Sequelize('mysql://root:19yLCQqYNRF2vek8sPTR@containers-us-west-102.railway.app:6832/railway');
// const database = new Sequelize('evently', 'root', process.env.DB_PASS, {
//     host: 'localhost',
//     dialect: 'mysql'
// })
exports.default = database;
