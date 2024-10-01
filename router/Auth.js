const { hashSync } = require('bcrypt');
const userModule = require('../model/User');

const router = require('express').Router();

router.post('/signup', async(req, res) => {
    try{
        const {name, username, email, password} = req.body;
        if(!name || !username || !email || !password){
            res.status(400).send({
                success: false, 
                message: "Please enter all required data."
            })
        }
        const hashPassword = hashSync(password, 10)
        const userList = new userModule({
            name, username, email, password: hashPassword
        })
        await userList.save();
        console.log(hashPassword)
        res.status(201).send({
            success: true, 
            message: "User created successfully.", 
            password: hashPassword
        })
    }catch(error){
        console.log(error)
    }
})
module.exports = router