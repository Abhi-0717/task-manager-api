const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token})//this is going to find a user with the correct id who has the authentication token already stored
        
        if(!user){
            throw new Error()
        }
         
        req.token = token //using cuurent token so that same user can login and logout from multiple devices
        req.user = user
        next()
    }
    catch(e){
        res.status(401).send({ error: 'Please authenticate.'})
    }
}

module.exports = auth