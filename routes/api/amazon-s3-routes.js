const AWS = require('aws-sdk');
const fs = require('fs')
const config = require("config");
const express = require("express");
const { validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const router = express.Router();

console.log(process.env.AWS_ACCESS_KEY_ID);


var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2',
});


router.post("/api/assets/upload", (req, res) => {

    console.log("UPLOADBODY", req.files)

    // need to know where these files are coming from
    const file = fs.readFile(req.files.image.tempFilePath, function(err, data) {
        var params = {
            Key: req.files.image.name,
            Bucket: process.env.BUCKET_NAME,
            Body: data,
            ACL: 'public-read'
        };

        s3.putObject(params, function put(err, data) {
            if (err) {
                console.log("PUT ERROR", err, err.stack);
                return;
            } else {
                console.log("PUT SUCESS");
            }
            delete params.Body;
        }); 
    });
});


module.exports = router