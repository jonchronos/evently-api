import { DataTypes } from 'sequelize'
import db from '../database/connection'


const Booking = db.define('Booking', {
    pk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: 'Metalica'
    },
    area: {
        type: DataTypes.STRING,
        defaultValue: 'General'
    },
    price: {
        type: DataTypes.INTEGER,
        defaultValue: 4000
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
},
    {
        timestamps: false
    }
)

export default Booking
