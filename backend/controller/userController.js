const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHander = require("express-async-handler");
const User = require("../models/userModel")

const registerUser = asyncHander(async (req,res) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error("please add fields")
    }

    //Check if user exits
    const userExits = await User.findOne({email});
    if(userExits){
        res.status(400)
        throw new Error('User already exists');
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //Create user
    const user = await User.create({
        name,
        email,
        password:hashedPassword

    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
})

const loginUser = asyncHander(async(req,res) => {
      const {email,password} = req.body;
      const user = await User.findOne({email});
      if(user && (await bcrypt.compare(password,user.password))){
          res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
          });
      }else {
            res.status(400);
            throw new Error("Invalid credentials");
      }
})

const getUser = asyncHander(async (req, res) => {
  
    res.json(req.user);
});


const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

 module.exports = { registerUser, loginUser, getUser };