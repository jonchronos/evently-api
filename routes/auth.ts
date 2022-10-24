import { Router } from 'express'
import { googleSignIn, login } from '../controllers/auth'



const router = Router()


router.post('/login', login)

router.post('/google', googleSignIn)



export default router