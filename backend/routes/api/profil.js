const express = require('express')
const router = express.Router()
const Profil = require('../../models/Profil')
const User = require('../../models/User')
const auth = require('../../middleware/auth')

// ambil profil user
router.get('/me', auth, async(req, res) =>
{
	try
    {
        const profil = await Profil.findOne({user: req.user.id})
        if(!profil)
        {
            return res.status(404).json({msg: 'Profil untuk pengguna ini tidak ditemukan'})
        }

        res.json(profil)
    } catch(err)
    {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// buat profil dan update profil
router.post('/', auth, async(req, res) =>
{
    const errors = validationResult(req)
    if(!errors.isEmpty)
    {
        return res.status(400).json({errors: errors.array()})
    }

    const {
        posisi,
        nohp,
        avatar
    } = req.body

    // profil object
    const profilField = {}

    profilField.user = req.user.id
    if(posisi) profilField.posisi = posisi
    if(nohp) profilField.nohp = nohp
    if(avatar) profilField.avatar = avatar

    try
    {
        let profil = await Profile.findOne({user: req.user.id})
        // kalo profil ada
        if(profil)
        {
            profil = await Profil.findOneAndUpdate({user: req.user.id}, {$set: profilField}, {new: true})
            return res.json(profil)
        }

        // buat profil
        profil = new Profil(profilField)
        await profil.save()
        res.json(profil)
    } catch(err)
    {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})