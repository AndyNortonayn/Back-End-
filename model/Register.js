const {Schema, model} = require('mongoose')

const Register = new Schema({
    login:{type: String, unique: true, mrequired: true},
    password:{type: String, required: true},
})

module.exports = model('Register', Register)