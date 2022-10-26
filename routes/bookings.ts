import { Router } from 'express'
import { createBooking, getBookings } from '../controllers/bookings'
import { getUserTickets } from '../controllers/users'



const router = Router()


router.get('/', getBookings)
router.get('/:id', getUserTickets)
router.post('/', createBooking)



export default router