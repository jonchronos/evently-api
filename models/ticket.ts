import { DataTypes } from 'sequelize'
import db from '../database/connection'
import Event from '../models/events'


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
},
    {
        timestamps: false
    }
)

//Associations
//User has many Bookings
Ticket.hasOne(Event, { foreignKey: 'event_id', as: 'event' });
Event.belongsTo(Ticket, { foreignKey: 'event_id', as: 'ticket' });

export default Ticket
