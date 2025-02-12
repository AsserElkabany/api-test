const express = require("express");

exports.handler = async (req,method) => 
    {
    if(method === "POST"){
        return 'POST request received';
    }else if(method === "GET"){
        return "GET request received";
    }
}

