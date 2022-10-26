import { Response, Request } from 'express'
import Booking from '../models/booking'
import Ticket from '../models/ticket'
// import Ticket from '../models/ticket'



export const getBookings = async (_: Request, res: Response) => {
    const bookings = await Booking.findAll({
        where: { status: true }
    })

    res.json(bookings)
}

export const createBooking = async (req: Request, res: Response) => {
    const body = req.body

    const bookings = []

    // If only one booking
    if (body.quantity === 1) {
        const booking = await Booking.create(body)
        return res.json(booking)
    }

    // if there are more than one create an array
    if (body.quantity > 1) {
        for (let i = 1; i <= body.quantity; i++) {
            const result = await Booking.create(body)
            bookings.push(result)
        }
    }

    // Find ticket type
    const findticket = await Ticket.findByPk(1)
    // Get plain info
    const ticket = findticket?.get({ plain: true })
    // subtract the amount from the total number of tickets
    const ticketsAvailables = ticket.availables - body.quantity
    // Update available ticket quantity
    findticket.update({
        ...res,
        availables: ticketsAvailables
    })

    res.json(bookings)

}
