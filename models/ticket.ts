import { DataTypes } from 'sequelize'
import db from '../database/connection'


const Ticket = db.define('ticket', {
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
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
},
    {
        timestamps: false
    }
)

export default Ticket
