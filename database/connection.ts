import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const database = new Sequelize('evently', 'root', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
})

export default database