import { Response, Request } from 'express'
import Ticket from '../models/ticket'


export const getTickets = async (_: Request, res: Response) => {
    const tickets = await Ticket.findAll({
        where: {
            status: true
        },
        include: ['event']
    })

    res.json({
        tickets
    })
}

export const createTicket = async (req: Request, res: Response) => {
    const body = req.body

    const ticket = await Ticket.create(body)

    res.json(ticket)
}

