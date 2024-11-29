import { Router } from 'express';

const router = Router();

router.get('/',(req,res) => {
    res.send('Auth Route with the get method');
})

export default router;