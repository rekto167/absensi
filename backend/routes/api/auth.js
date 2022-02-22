const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')

// check user yang auth
router.get('/', auth, async(req, res) =>
{
    try
    {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    }catch(err)
    {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// login
router.post('/',
    [
        check('username', 'Masukkan username anda').not().isEmpty(),
        check('password', 'Masukkan password anda').exists(),
    ],
    async (req, res) =>
{
    const {username, password} = req.body

    try
    {
        let user = await User.findOne({username})
        if(!user)
        {
            return res.status(404).json({msg: 'User belum terdaftar'})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch)
        {
            return res.status(401).json({msg: 'Password salah'})
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {expiresIn: 360000},
            (err, token) =>
            {
                if(err) throw err
                res.json({token})
            }
        )
    } catch(err)
    {
        console.error(err.message)
        res.status(500).send('Server error')
    }

})

module.exports = router