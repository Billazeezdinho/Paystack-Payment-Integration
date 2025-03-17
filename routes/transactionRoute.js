const router = require('express').Router()
const { initialPayment, verifyPayment } = require('../controller/transactionController')

router.post('/initialize', initialPayment)

router.get('/verify', verifyPayment);

module.exports = router;