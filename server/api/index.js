const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
//Mount router to products
router.use('/products', require('./products'))
router.use('/cart', require('./cart'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
