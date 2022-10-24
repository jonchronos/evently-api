import express, { Application } from 'express'
import cors from 'cors'
import userRouter from '../routes/users'
import database from '../database/connection'


class Server {

    private app: Application
    private port: String
    private path = {
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
        this.app.use(this.path.users, userRouter)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}

export default Server