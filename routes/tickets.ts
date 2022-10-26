import { Router } from 'express'
import { createTicket, getTickets } from '../controllers/tickets'



const router = Router()


router.get('/', getTickets)
router.post('/', createTicket)



export default router