const express = require("express");

exports.handler = async (req,method) => 
    {
    if(method === "POST"){
        return JSON.stringify({ message: "POST request received" });
    }else if(method === "GET"){
        return JSON.stringify({ message: "get request received" });
    }
}

