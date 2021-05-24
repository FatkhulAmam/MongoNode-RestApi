const Makanan = require('../models/makananModels')

module.exports ={
    inputMakanan: async (req, res) => {
        const InputMakanan = new Makanan({
            nama: req.body.nama,
            jenis: req.body.jenis
        })

        try {
            const makanan = await InputMakanan.save()
            res.json(makanan)
        } catch(err){
            res.json({message: err})
        }
    }
}