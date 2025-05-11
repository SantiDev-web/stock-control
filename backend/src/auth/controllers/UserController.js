const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const {generateToken} = require('../utils/GenToken')

const loginUser = async (req, res) =>{

    try{
        const {username, password} = req.body;

        const user = await User.findOne({username})
        if (!user){
            return res.status(400).json({message: 'Credenciales Invalidas'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message:'Credenciales Invalidas'})
        }

        const token = generateToken(user)
        res.json({token, role: user.role, username: user.username, id: user._id});

    }catch(error){
        console.error("Error en loginUser:", error);
        res.status(500).json({message: 'Error al iniciar sesion.'})
    }
};

module.exports = {loginUser};