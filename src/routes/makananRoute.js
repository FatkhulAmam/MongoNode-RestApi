const express = require('express')
const route = express.Router()

const {inputMakanan, getMakanan} = require('../controllers/makananControl')

route.post('/input', inputMakanan)
route.get('/get', getMakanan)

module.exports = route
