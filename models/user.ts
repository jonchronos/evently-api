import { DataTypes } from 'sequelize'
import db from '../database/connection'
import Booking from './booking';


const User = db.define('User', {
    pk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
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
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    google: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    {
        timestamps: false
    }
)

//Associations
//User has many Bookings
User.hasMany(Booking, { foreignKey: 'user_id', as: 'tickets' });
Booking.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

export default User