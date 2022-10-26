import { Response, Request } from 'express'
import Event from '../models/events'


export const getEvents = async (_: Request, res: Response) => {
    const events = await Event.findAll({
        where: {
            status: true
        }
    })

    res.json({
        events
    })
}

export const createEvent = async (req: Request, res: Response) => {
    const { name, time, date, location, address } = req.body

    const event = await Event.create({
        name,
        time,
        date,
        location,
        address
    })

    res.json({
        msg: 'Event created',
        event
    })

}