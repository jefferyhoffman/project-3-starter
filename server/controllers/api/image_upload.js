require("dotenv").config
const {JWTVerifier} = require('../../lib/passport')
const express = require("express");
const router = require('express').Router()
const cloudinary = require("cloudinary");
const formData = require("express-form-data");
const cors = require("cors");
const db = require('../../models');
const multer = require('multer')
//const app = express()
const storage = require('../../lib/multer')
const fs = require('fs')
let upload = multer({ storage: storage });


// app.use(cors());
// app.use(formData.parse());

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.SECRET_KEY,
    api_key: process.env.API_KEY 
})

router.post("/",JWTVerifier, upload.single('file'), (req,res)=> {
    
     //const values = Object.values(req.files)
    cloudinary.uploader.upload('./uploads/'+req.file.filename)
    .then(results=> {
        const userID ='5e8f81f6ab590d4f2122454a'
        console.log(req.user._id, 'this is the id ok')
        
        db.Users.findByIdAndUpdate(
            req.user._id,
            {$push:{galleries:{name:results.original_filename, images:{imageURL: results.url}}}},
            (err, updated)=>{
                if(err)console.log(err, '<===')
                console.log(updated)
                res.sendStatus(200)

            }
        )
    })
    //  Promise.all(promises).then(results => res.json(results))
     .catch(err=>{if(err)throw err})
    // console.log("Image uploaded successfully")
    //
})
module.exports = router
