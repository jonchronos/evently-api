import { DataTypes } from 'sequelize'
import db from '../database/connection'


const User = db.define('User', {
    full_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    google: {
        type: DataTypes.BOOLEAN
    }
})

export default User