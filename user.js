const express = require("express");

const path = require('path');

const userData = require("./home");

const router = express.Router();

router.use("/user",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,"pages","user.html"));
    const users = userData.userName;
    // console.log(userData.userName[0].title)
    res.render("user",{prods : users, docTitle : "user"});
});

module.exports = router;