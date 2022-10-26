import { Sequelize } from "sequelize";

const database = new Sequelize('mysql://root:19yLCQqYNRF2vek8sPTR@containers-us-west-102.railway.app:6832/railway')
// const database = new Sequelize('evently', 'root', process.env.DB_PASS, {
//     host: 'localhost',
//     dialect: 'mysql'
// })

export default database