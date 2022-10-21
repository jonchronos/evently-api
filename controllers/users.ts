import { Response, Request } from 'express'


// Get all users
export const getUsers = (_: Request, res: Response) => {
    res.json({
        msg: 'hola'
    })
}
//Get a user by ID
export const getUser = (_: Request, res: Response) => {
    // res.send('Hola desde typescript')
    res.json({
        msg: 'hola'
    })
}
//Create new user
export const createUser = (_: Request, res: Response) => {
    res.send('Hola desde typescript')
}
// Update user by ID
export const updateUser = (_: Request, res: Response) => {
    res.send('Hola desde typescript')
}
//Delete user by ID
export const deleteUser = (_: Request, res: Response) => {
    res.send('Hola desde typescript')
}


