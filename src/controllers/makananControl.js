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
    },
    getMakanan: async (req, res) => {
        try {
            const makanan = await Makanan.find()
            res.json(makanan)
        }catch(err){
            res.json({message: err})
        }
    },
    updateMakanan: async (req, res) => {
        const id = req.params.makananId
        try{
            const makananUpdate = await Makanan.updateOne({_id: id}, {
                nama: req.body.nama,
                jenis: req.body.jenis
            })
            res.json(makananUpdate)
        }catch(err){
            res.json({message: err})
        }
    },
    upgradeMakanan: async (req, res) => {
        const id = req.params.makananId
        try{
            const makananUpdate = await Makanan.updateOne({_id: id}, {
                nama: req.body.nama,
                jenis: req.body.jenis
            })
            res.json(makananUpdate)
        }catch(err){
            res.json({message: err})
        }
    },
    hapusMakanan: async (req, res) => {
        const id = req.params.makananId
        try{
            const makananHapus = await Makanan.deleteOne({_id: id})
            res.json(makananHapus)
        }catch(err){
            res.json({message: err})
        }
    }
}