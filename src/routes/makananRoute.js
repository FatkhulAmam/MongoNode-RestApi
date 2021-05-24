const express = require('express')
const route = express.Router()

const {inputMakanan, getMakanan, updateMakanan, upgradeMakanan, hapusMakanan} = require('../controllers/makananControl')

route.post('/input', inputMakanan)
route.get('/get', getMakanan)
route.patch('/update/:makananId', updateMakanan)
route.put('/upgrade/:makananId', upgradeMakanan)
route.delete('/hapus/:makananId', hapusMakanan)

module.exports = route
