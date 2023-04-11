const Register = require ("../model/Register.js");
const bcrypt = require ("bcryptjs");
const {validationResult} = require ("express-validator");
const jwt = require ('jsonwebtoken');
const {secret} = require ("./config");

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: "22h"} )
}

class RegisterController{
    async register (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message:"Ошибка",errors})
            }
            const {login, password} = req.body
            const candidat = await Register.findOne({login})
            if (candidat){
                return res.status(400).json({message:'Данное имя занято'})
            }
            const hashPassword = bcrypt.hashSync(password, 5)
            const register = new Register({login, password:hashPassword})
            await register.save()
            return res.json(register)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async login (req, res){
        try {
            const{login, password} = req.body
            const register = await Register.findOne({login})
            if(!register){
                return res.status(400).json({message:'Нема такого'})
            }
            const validPassword = bcrypt.compareSync(password, register.password);
            if(!validPassword){
                return res.status(400).json({message:'Нема такого'})
            }
            const token = generateAccessToken( register._id)
            return res.json({token})
        }catch (e){
            console.log(e)
            res.status(500).json
        }
    }


}

module.exports = new RegisterController();