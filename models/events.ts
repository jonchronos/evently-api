import { DataTypes } from 'sequelize'
import db from '../database/connection'
import Ticket from './ticket';


const Event = db.define('Event', {
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
    tickets: {
        type: DataTypes.INTEGER,
        defaultValue: 500
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: new Date()
    },
    time: {
        type: DataTypes.TIME,
        defaultValue: '20:30:00'
    },
    location: {
        type: DataTypes.STRING,
        defaultValue: "Capital Federal, Argentina"
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: "Estadio Federal - Bogota 434"
    },
    img: {
        type: DataTypes.STRING,
        defaultValue: "https://i.pinimg.com/originals/25/e0/2d/25e02d1fdabf928219ce77883b883ec3.jpg"
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
Event.hasMany(Ticket, { foreignKey: 'event_id', as: 'ticket' });
Ticket.belongsTo(Event, { foreignKey: 'event_id', as: 'event' });

export default Event
