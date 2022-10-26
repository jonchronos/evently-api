"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const Booking = connection_1.default.define('Booking', {
    pk: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'Metalica'
    },
    area: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'General'
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 4000
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    timestamps: false
});
exports.default = Booking;
