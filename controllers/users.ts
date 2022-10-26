import { Response, Request } from 'express'
import bcryptjs from 'bcryptjs'
import User from '../models/user'
import Booking from '../models/booking'
// import { Auth } from '../types'



// Get all users
export const getUsers = async (_: Request, res: Response) => {
    const users = await User.findAll({
        where: {
            status: true
        },
        include: ['tickets']
    })
    res.json(
        users
    )
}
//Get a user by ID
export const getUser = (_: Request, res: Response) => {
    res.json({
        msg: 'hola'
    })
}
// Get user's tickets
export const getUserTickets = async (req: Request, res: Response) => {
    const { id } = req.params

    const tickets = await Booking.findAll({
        where: { user_id: id }
    })

    res.json(tickets)
}

//Create new user
export const createUser = async (req: Request, res: Response) => {
    const { full_name, email, password } = req.body

    const user = await User.create({
        full_name,
        email,
        // bcryptjs hash user password
        password: await bcryptjs.hash(password, 10)
    })

    res.json({
        msg: 'User created',
        user
    })
}
// Update user by ID
export const updateUser = (_: Request, res: Response) => {
    res.send('Hola desde typescript')
}
//Delete user by ID
export const deleteUser = (_: Request, res: Response) => {
    res.send('Hola desde typescript')
}




