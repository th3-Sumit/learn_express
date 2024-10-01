const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        unique: false, 
        required: true,
    }, 
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const userModule = mongoose.model('test_users', userSchema)

module.exports = userModule;