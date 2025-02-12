const express = require("express");
const UsersDB=require('../schema/users');

exports.handler = async (req,method) => 
    {
    if(method === "GET"){
        //return JSON.stringify({ message: "POST request received" });
        if(req.path === "/user")
        {
            const results = await UsersDB.find()
            console.log(results)
            return JSON.stringify({ users: results });
        }

    }else if(method === "POST"){
        return JSON.stringify({ message: "get request received" });
    }
 }

