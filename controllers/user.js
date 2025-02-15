const express = require("express");
const UsersDB=require('../schema/users');
const users = require("../schema/users");

exports.getUsers = async (req, res) => {
    try 
    {
        const users = await UsersDB.find();
        res.status(200).json(users);
    } 
    catch (error) 
    {
        res.status(500)
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await UsersDB.findById(req.params.id);
        
        if (!user) {
            return res.status(404).json({ message: "User not found" }); 
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
