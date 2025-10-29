import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// jwt token
const generateToken = (userId)=>{
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

// register user
export const registerUser = async (req, res)=>{
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password || password.length < 8){
            return res.json({sucess: false, message: 'Fill all the Fields !'})
        }

        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({sucess: false, message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword})
        const token = generateToken(user._id.toString())
        res.json({sucess: true, token})


    } catch (error) {
        console.log(error.message);
        res.json({sucess: false, message: error.message})
    }
}

// login user
export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({sucess: false, message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({sucess: false, message: "Invalid Credentials"})
        }
        const token = generateToken(user._id.toString())
        res.json({sucess: true, token})
    
    } catch (error) {
        console.log(error.message);
        res.json({sucess: false, message: error.message})
    }
}

// user data using jwt
export const getUserData = async (req, res) =>{
    try {
        const {user} = req;
        res.json({sucess: true, user})
    } catch (error) {
        console.log(error.message);
        res.json({sucess:false, message: error.message})
    }
}