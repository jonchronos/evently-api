import { Response, Request } from 'express'
import Booking from '../models/booking'
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

    if (body.quantity === 1) {
        const booking = await Booking.create(body)
        return res.json(booking)
    }

    if (body.quantity > 1) {
        for (let i = 1; i <= body.quantity; i++) {
            const result = await Booking.create(body)
            bookings.push(result)
        }
    }

    res.json(bookings)

}
