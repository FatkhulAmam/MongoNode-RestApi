const mongose = require('mongoose')

const MakananSchema = mongose.Schema({
    nama: {
        type: String,
        required: true
    },
    jenis: {
        type: String,
        required: true
    }
})

module.exports = mongose.model('Makanan', MakananSchema)
