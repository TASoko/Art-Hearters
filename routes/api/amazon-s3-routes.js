


app.post("/api/assets/upload", (req, res) => {

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
    })
})