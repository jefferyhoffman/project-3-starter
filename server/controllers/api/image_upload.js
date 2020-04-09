require("dotenv").config
const express = require("express");
const cloudinary = require("cloudinary");
const formData = require("express-form-data");
const cors = require("cors");

const app = express()

app.use(cors());
app.use(formData.parse());

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_secret: process.env.SECRET_KEY,
    api_key: process.env.API_KEY 
})

imageController.post("/api/img-upload", (req,res)=> {
    const values = Object.values(req.files)
    const promises = values.map(img=> cloudinary.uploader.upload(img.path))

    Promise.all(promises).then(results => res.json(results))
    console.log("Image uploaded successfully")
})
