const axios = require("axios");
const { oauth2client } = require("../utils/googleConfig");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const googleLogin = async (req,res) =>{
    try {
        console.log("Google Login Called");
        const {code} = req.query;
        console.log(code);
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);
        console.log("Google token response:", googleRes);
        
        const userRes = await axios.get( `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${googleRes.tokens.access_token}` );
        const {email, name, picture } = userRes.data;
        console.log(email);
        let user = await userModel.findOne({email});
        // We can add picture to user schema if wants
        if(!user){
            user = await userModel.create({
                email,
                name,
            })
        }
        const {_id} = user;
        const token = jwt.sign({_id, email}, 
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_TIMEOUT}
        );

        return res.status(200).json({
            msg: "Success",
            token,
            user
        })
    } catch (err) {
        res.status(500).json({
            msg: "Internal Server Error",
        })
    }
}

module.exports = {
    googleLogin,
}