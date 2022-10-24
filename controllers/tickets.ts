import { Response, Request } from 'express'
import Tickets from '../models/ticket'


export const getTickets = (_: Request, res: Response) => {
    const tickets = Tickets.findAll({
        where: {
            status: true
        }
    })

    res.json({
        tickets
    })
}