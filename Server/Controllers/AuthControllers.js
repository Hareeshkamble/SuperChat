import express from "express";


let login=async(req,res)=>{
    await res.send("for login controller ")
}

let signup=async(req,res)=>{
    res.send("for signUp controller ")
}

let logout=async(req,res)=>{
    res.send("for logout User ")
}

export {
    login,
    signup,
    logout
}