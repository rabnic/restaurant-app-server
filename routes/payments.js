const express = require('express');
const router = express.Router();

const stripe = require('stripe')('sk_test_51O28R3GkBIv4HXchfhtpOsHlb79vvIBtwz8GK58yIJpqAZqQYHtUey3ViD4sF0KUHFeLF48NpmcIkTpuNCq9TGHQ00To3A9yn9');

router.post('/intents', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: 'zar',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;




// curl -X POST -H "Content-Type: application/json" \ -d "{\"amount\":17950}" \ http://localhost:3000/payments/intents











