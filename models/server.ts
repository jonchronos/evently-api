import express, { Application } from 'express'
import cors from 'cors'
import usersRouter from '../routes/users'
import ticketsRouter from '../routes/tickets'
import authRouter from '../routes/auth'
import database from '../database/connection'


class Server {

    private app: Application
    private port: String
    private path = {
        auth: '/api/v1/auth',
        tickets: '/api/v1/tickets',
        users: '/api/v1/users'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '3000'

        // Connecto to DB
        this.connectDB()
        // Initial methods
        this.middlewares()
        // Define routes
        this.routes()
    }

    async connectDB() {
        try {
            await database.sync({ force: true })
            console.log('Database connected')
        } catch (e) {
            let mess = e
            console.log('could not connect database')
            console.log(mess)
        }
    }

    middlewares() {
        // CORS
        this.app.use(cors())
        // Parse body to JSON
        this.app.use(express.json())
        // Render static files
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.path.auth, authRouter)
        this.app.use(this.path.tickets, ticketsRouter)
        this.app.use(this.path.users, usersRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

export default Server