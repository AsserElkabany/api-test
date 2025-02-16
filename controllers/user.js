const express = require("express");
const UsersDB=require('../schema/users');
const users = require("../schema/users");
const jwt=require('jsonwebtoken');
const jwtkey="asser222";

exports.getHome = async (req, res) => 
{
    
    const token = jwt.sign({phone:1}, jwtkey);
    res.json("Welcome to the home page your token is "+token);
}
exports.getUsers = async (req, res) => {
    try 
    {
        const users = await UsersDB.find();
        res.status(200).json(users);
    } 
    catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {
        console.log("iam here-----------------");
        const user = await UsersDB.findById(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" }); 
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addUser = async (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const password = req.body.password;
    const user = new UsersDB( { name, phone, password } );
    try {
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
