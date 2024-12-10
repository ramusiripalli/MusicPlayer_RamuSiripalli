import { Router } from 'express';
//import { protectRoute } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/like',(req,res) => {
    res.send('User Route with the get method');
})

export default router;