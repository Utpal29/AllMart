import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userController.js'

router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)

export default router