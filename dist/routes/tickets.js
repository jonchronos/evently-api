"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tickets_1 = require("../controllers/tickets");
const router = (0, express_1.Router)();
router.get('/', tickets_1.getTickets);
router.post('/', tickets_1.createTicket);
exports.default = router;
