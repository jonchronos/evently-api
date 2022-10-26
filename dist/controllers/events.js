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
exports.createEvent = exports.getEvents = void 0;
const events_1 = __importDefault(require("../models/events"));
const getEvents = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const events = yield events_1.default.findAll({
        where: {
            status: true
        }
    });
    res.json({
        events
    });
});
exports.getEvents = getEvents;
const createEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, time, date, location, address } = req.body;
    const event = yield events_1.default.create({
        name,
        time,
        date,
        location,
        address
    });
    res.json({
        msg: 'Event created',
        event
    });
});
exports.createEvent = createEvent;
