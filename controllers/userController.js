const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    update:async(req,res)=>{
        const {email} = req.body;

        if(!email){
            return res.status(400).send({
                message:"Email must be specified"
            })
        }
        
        const user_exists = await User.findOne({
            where:{
                email
            }
        })
        if(!user_exists){
            return res.status(400).send({message:'No user exits with this email'})
        }
        const {firstName,lastName,address,image} = req.body

        await User.update({
            firstName,
            lastName,
            address,
            image

        },{
            where:{
                email
            }
        })
        return res.status(200).json({message:"User Updated succesfully",
    firstName,
    lastName,
    image,
    address
    })
        
    },
    passwordUpdate:async(req,res)=>{
        const {email,oldPassword,newPassword} = req.body;
        const user = await User.findOne({
            where:{email}
        })
        if(!user){
            return res.status(400).send({message:'User not found'});
        }
        const hashed_old = await bcrypt.compare(oldPassword,user.password)
        if(!hashed_old){
            return res.status(400).send({message:'Old password didn`t match'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        await User.update({
        password:hashedPassword    
        },{
            where:{
                email
            }
        })
        return res.status(200).send({message:'User`s password updated succesfully'});

    },
    delete:async(req,res)=>{
        const {id} = req.params;

        const is_user = await User.findOne({
            where:{
                id
            }
        })
        if(!is_user){
            return res.status(400).send({message:'User not found'})
        }
        await User.destroy({
            where:{
                id
            }
        }).then(()=>{
            return res.status(200).send({message:'User deleted succesfully'})
        })
        .catch((error)=>{
            return res.status(400).send({message:'User not deleted '+error})
        })
    },
    readById:async(req,res)=>{
        const {id} = req.params;
        const user_exists = await User.findOne({
            where:{

                id
            },
            raw:true
            
        })
        if(!user_exists){
            return res.status(400).send({
                message :"No user found for the given id"
            })
        }
        return res.status(200).json({
            ...user_exists
        })
        
    },
    getAll: async (req, res) => {
        try {
          const users = await User.findAll();
          res.json(users);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Internal server error '+err });
        }
      },
}