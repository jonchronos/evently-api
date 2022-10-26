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
exports.createBooking = exports.getBookings = void 0;
const booking_1 = __importDefault(require("../models/booking"));
const ticket_1 = __importDefault(require("../models/ticket"));
// import Ticket from '../models/ticket'
const getBookings = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield booking_1.default.findAll({
        where: { status: true }
    });
    res.json(bookings);
});
exports.getBookings = getBookings;
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const bookings = [];
    // If only one booking
    if (body.quantity === 1) {
        const booking = yield booking_1.default.create(body);
        return res.json(booking);
    }
    // if there are more than one create an array
    if (body.quantity > 1) {
        for (let i = 1; i <= body.quantity; i++) {
            const result = yield booking_1.default.create(body);
            bookings.push(result);
        }
    }
    // Find ticket type
    const findticket = yield ticket_1.default.findByPk(1);
    // Get plain info
    const ticket = findticket === null || findticket === void 0 ? void 0 : findticket.get({ plain: true });
    // subtract the amount from the total number of tickets
    const ticketsAvailables = ticket.availables - body.quantity;
    // Update available ticket quantity
    findticket.update(Object.assign(Object.assign({}, res), { availables: ticketsAvailables }));
    res.json(bookings);
});
exports.createBooking = createBooking;
