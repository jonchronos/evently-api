import { DataTypes } from 'sequelize'
import db from '../database/connection'



const Ticket = db.define('Ticket', {
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
    availables: {
        type: DataTypes.INTEGER,
        defaultValue: 42
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    event_id: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
},
    {
        timestamps: false
    }

)

export default Ticket
