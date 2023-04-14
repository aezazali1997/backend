const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
require('dotenv').config();
const SECRETKEY =  process.env.SECRETKEY;
module.exports = {
    login: async (req, res, next) => {
        const { email, password } = req.body;
        console.log(email,password);

        // Find the user with the given email
        const user = await User.findOne({where:{ email }});

        // If the user is not found, return an error
        if (!user) {
            console.log('no user found')
            return res.status(400).send({ message: 'Invalid email or password' });
        }
         // Compare the given password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);

          // If the password is invalid, return an error
  if (!isPasswordValid) {
    console.log('password didnt match')
    return res.status(400).send({ message: 'Invalid email or password' });
  }
  const token = jwt.sign(
    { email,name:user.name },
    SECRETKEY,
    {expiresIn:"1h"}
    );
  res.send({ 
    firstName:user.firstName,
    lastName:user.lastName,
    email,
    address:user.address,
    token });



    },
    signup: async (req, res, next) => {
        const { firstName,lastName, email, password } = req.body;
        if (!firstName || !email || !password) {
            return res.status(403).send('Name,Email and Password must be provided');
        }
        const already_user = await User.findOne({
            where: {
                email
            }
        })
        if (already_user) {
            return res.status(403).send('User already exsts')
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('hashed', hashedPassword)

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })
        await user.save();
        return res.status(201).send('User created successfully')

    }
}