const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const User = require('../../models/User')
const Profile = require('../../models/Profile')
const {check, validationResult} = require('express-validator')

// registrasi akun
router.post('/',
    [
        check('nama', 'Nama harus diisi').not().isEmpty(),
        check('username', 'Username harus diisi').not().isEmpty(),
        check('password', 'Password diisi minimal 8 karakter').not().isLength({min: 8})
    ],
    async (req, res) => {
    const errors = validationResult(req.body)
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()})
    }

    const {nama, username, password} = req.body
    try
    {
        let user = await User.findOne({username})
        // let profile = await Profile.
        if(user)
        {
            return res.status(400).json({errors: [{msg: 'User sudah ada'}]})
        }

        const avatar = gravatar.url(username, {
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        user = new User({nama, username, password, avatar})
        const salt = await bcrypt.genSalt(10)

        user.password = await bcrypt.hash(password, salt)
        let profile = new Profile({
            user: user.id
        })
        await user.save()
        await profile.save({
            user: user.id,
            posisi: '',
            nohp: '',
        })

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {expiresIn: 360000000}, (err, token) =>
        {
            if(err) throw err
            res.json({token})
        })

    } catch (err)
    {
        console.error(err.message)
    }

})

module.exports = router