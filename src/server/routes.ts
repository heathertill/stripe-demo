import * as express from 'express';
import * as stripeLoader from 'stripe';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

// ('removed for security') this is from strip secret key
// do not post this file to github!!!
const stripe = new stripeLoader('removed for security');

const charge = (token: string, amt: number) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'usd',
        source: token,
        description: 'Statement Description'
    });
};


router.post('/api/donate', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount);
        console.log(data);
        res.send('Charged!')
    } catch (e) {
        console.log(e);
        res.status(500)
    }
})

export default router;