const express = require('express');

const path = require('path');

const router = express.Router();

const Dataarray = [];

router.get("/",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,"pages","home.html"))
    res.render("home",{docTitle : "home"});
});

router.post("/text",(req,res,next)=>{
    res.redirect("/user");
    Dataarray.push({ title : req.body.inpVal});
});

module.exports = {
    handleForm : router,
    userName : Dataarray
}
