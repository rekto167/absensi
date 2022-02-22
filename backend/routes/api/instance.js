const express = require('express')
const router = express.Router()
const config = require('config')
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const Instance = require('../../models/Instance')
const  { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')

// Buat instansi baru
router.post('/',
    auth,
    [
        check('name', 'Nama instansi harus diisi').not().isEmpty(),
        check('location', 'Masukkan lokasi dari instansi anda...').not().isEmpty()
    ]
, async (req, res) => {
    const errors = validationResult(req.body)

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { name, location } = req.body

    try{
        let profile = await Profile({user: req.user.id})

        if(!profile){
            return res.status(401).json({msg: 'Anda harus mendaftar terlebih dahulu'})
        }

        let instance = await Instance({profile: profile.id})

        // cek kalo ada instance
        if(instance.name == name){
            return res.status(409).json({msg: 'Nama instansi sudah ada'})
        }

        instance = new Instance({
            master: profile.id,
            name,
            location
        })

        await instance.save()

        res.json(instance)

    } catch(err){
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

module.exports = router