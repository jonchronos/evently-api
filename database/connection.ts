import { Sequelize } from "sequelize";

const database = new Sequelize(process.env.DB_RAILWAY as string)
// const database = new Sequelize('evently', 'root', process.env.DB_PASS, {
//     host: 'localhost',
//     dialect: 'mysql'
// }) 

export default database