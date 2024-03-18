import express from 'express'
import { UserController } from './user.controller';

const router = express.Router();
router.get('/',(req,res)=>{
    res.send('hello prisma')
})

router.post('/create-user', UserController.insertIntoDB)
router.post('/profile', UserController.insertOrUpdateProfile)
router.get('/users', UserController.getUsers)
router.get('/users/:id', UserController.getSingleUsers)
export const userRoutes = router