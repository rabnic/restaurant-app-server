const express = require('express');
const router = express.Router();
const paymentRoutes = require('./payments');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/payments', paymentRoutes);

module.exports = router;
