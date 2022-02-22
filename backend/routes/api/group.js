const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const { check, validationResult} = require('express-validator')
// models
const Profile = require('../../models/Profile')
const User = require('../../models/User')
const Instance = require('../../models/Instance')
const Group = require('../../models/Group')


// joining user to groups
router.post('/',
[
    auth,
    [
        check('instance', 'Instansi harus diisi').not().isEmpty()
    ]
],
async (req, res) => {
    const errors = validationResult(req)

    if(!errors){
        return res.status(401).json({errors: errors.array()});
    }

    const {
        instance
    } = req.body

    try{

        let profile = await Profile.findOne({user: req.user.id});

        if(!profile){
            return res.status(404).json({msg: 'User Belum Terdaftar'})
        }

        let group = new Group({
            instance,
            user: profile.id
        })

        await group.save();

        res.status(200).json(group);

    } catch(err){

        console.error(err.message);
        res.status(500).send('Server error')

    }
})


module.exports = router