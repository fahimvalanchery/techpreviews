const express = require('express');
const userData = require('../model/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userRoutes = express.Router();

userRoutes.route('/')
.get((req,res)=>{
    res.render('signup');
});

userRoutes.route('/login')
.get((req,res)=>{
    res.render('login')
});

userRoutes.get('login/sublogin',(req,res)=>{
    var username= req.param('username');
    var password = req.param('password');

    userData.findOne({username:username,password:password} ,function(err ,user){
        if(err){
            console.log(err)
            res.send("error")
        }
        if(!user)
        {
            return res.send("not user");
        }
        else
        {
            return res.send("success");
        }
    });
});

userRoutes.get('/signup',(req,res)=>{
    var username= req.param('username');
    var password = req.param('password');

    var user =new userData();
    user.username=username;
    user.password=password;
    user.save(function(err , savedUser){
        if(err)
        {console.log(err)
        res.send.status(500).send();
    }
    return res.send("submitted")
    });
   
});


module.exports=userRoutes;













// userRoutes.route('/signup')
// .get((req,res)=>{
//     bcrypt.hash(req.params.password, 10,(err , hash)=>{
//         // if(err){
//         //     return res.status(500).json({
//         //         error:err
//         //     });
//         // }
//         // else{
//             const user = new userData({
//                 _id: new mongoose.Schema.Types.ObjectId,
//                 email:req.params.email,
//                 password:hash
//         });
//         user.save()
//         .then(result=>{
//             console.log(result);
//             res.status(201).json({
//                 message:"User Created"
//             });
//         })
//         .catch(err =>{
//             console.log(err);
//             res.status(500).json({
//                 error:err
//             });
//         });
//         // }
    
//     })
// console.log(email);
// console.log(password)
// });
    