const express = require('express')
const route = express.Router()

const {inputMakanan, getMakanan, updateMakanan} = require('../controllers/makananControl')

route.post('/input', inputMakanan)
route.get('/get', getMakanan)
route.patch('/update/:makananId', updateMakanan)

module.exports = route
