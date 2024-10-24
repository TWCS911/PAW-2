const User = require("../model/user");
const bcrypt = require("bcrypt");

const signUp = (req, res) =>{
    bcrypt.hash(req.body.password,10)
    .then((hash)=>{
        const user = new User({
            email : req.body.email,
            password : hash
        });
    });

    user.save()
    .then((result) =>{
        res.status(202).json({
            message : "User Created"
            
        });
    })
    .catch((err)=>{
        res.status(500).json({
            message : "Internal Server Error"
        });
    });
};

const login = (req, res) => {
    let fetchedUser;

    User.findOne({email:req.body.email})
    .then((user)=>{
        if(!user){
            return res.status(401).json({
                message: "Auth Failed, Email not Exists !"
            });
        }
        fetchedUser = user;

        return bcrypt.compare(req.body.password, user.password);
    });
};
module.exports = {signUp, login}