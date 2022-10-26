"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
const ticket_1 = __importDefault(require("./ticket"));
const Event = connection_1.default.define('Event', {
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
        type: sequelize_1.DataTypes.STRING
    },
    tickets: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 500
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    },
    time: {
        type: sequelize_1.DataTypes.TIME,
        defaultValue: '20:30:00'
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "Capital Federal, Argentina"
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "Estadio Federal - Bogota 434"
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "https://i.pinimg.com/originals/25/e0/2d/25e02d1fdabf928219ce77883b883ec3.jpg"
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    },
}, {
    timestamps: false
});
//Associations
//User has many Bookings
Event.hasMany(ticket_1.default, { foreignKey: 'event_id', as: 'ticket' });
ticket_1.default.belongsTo(Event, { foreignKey: 'event_id', as: 'event' });
exports.default = Event;
