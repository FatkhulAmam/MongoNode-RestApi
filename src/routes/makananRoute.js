const express = require('express')
const route = express.Router()

const {inputMakanan} = require('../controllers/makananControl')

route.post('/input', inputMakanan)

module.exports = route
