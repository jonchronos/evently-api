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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("../routes/users"));
const tickets_1 = __importDefault(require("../routes/tickets"));
const auth_1 = __importDefault(require("../routes/auth"));
const events_1 = __importDefault(require("../routes/events"));
const bookings_1 = __importDefault(require("../routes/bookings"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        this.path = {
            auth: '/api/v1/auth',
            bookings: '/api/v1/bookings',
            events: '/api/v1/events',
            tickets: '/api/v1/tickets',
            users: '/api/v1/users'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3000';
        // Connecto to DB
        this.connectDB();
        // Initial methods
        this.middlewares();
        // Define routes
        this.routes();
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.sync({ force: true });
                console.log('Database connected');
            }
            catch (e) {
                let mess = e;
                console.log('could not connect database');
                console.log(mess);
            }
        });
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Parse body to JSON
        this.app.use(express_1.default.json());
        // Render static files
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.path.auth, auth_1.default);
        this.app.use(this.path.bookings, bookings_1.default);
        this.app.use(this.path.events, events_1.default);
        this.app.use(this.path.tickets, tickets_1.default);
        this.app.use(this.path.users, users_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
