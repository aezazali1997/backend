const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    update:async(req,res)=>{
        console.log('update');
        const {id} = req.params;
        
        const user_exists = await User.findOne({
            where:{
                email:id
            }
        })
        if(!user_exists){
            return res.status(403).send('No user exits with this email')
        }
        const {firstName,lastName,address,image} = req.body

        await User.update({
            firstName,
            lastName,
            address,
            image

        },{
            where:{
                email:id
            }
        })
        return res.status(201).json({message:"User Updated succesfully",
    firstName,
    lastName,
    image,
    address
    })
        
    },
    passwordUpdate:async(req,res)=>{
        const {email,old,password} = req.body;
        console.log(email,old,password)
        const user = await User.findOne({
            where:{email}
        })
        console.log('user')
        if(!user){
            return res.status(403).send('User not found');
        }
        const hashed_old = await bcrypt.compare(old,user.password)
        console.log('hasheed',hashed_old)
        if(!hashed_old){
            return res.status(401).send('old password didnt match')
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.update({
        password:hashedPassword    
        },{
            where:{
                email
            }
        })
        return res.status(202).send('user updated');

    },
    delete:async(req,res)=>{
        const {id} = req.params;

        const is_user = await User.findOne({
            where:{
                email:id
            }
        })
        if(!is_user){
            return res.status(401).send('Error user not found')
        }
        await User.destroy({
            where:{
                email:id
            }
        }).then(()=>{
            return res.status(200).send('User deleted succefuly')
        })
        .catch((error)=>{
            return res.status(401).send('Error deleting user')
        })
    }
}