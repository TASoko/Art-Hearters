import React, { Component } from 'react';
require('dotenv').config(); // Loading dotenv to have access to env variables

// const ReactS3 = require('react-s3');
// console.log(ReactS3);

// const config = {
//   bucketName: process.env.BUCKET_NAME,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'us-east-2'
// }

export default class Uploader extends Component {
  state = {
    message:''
  };

  getImage = e => {
    e.preventDefault();
    const files = document.querySelector("#upload-image").files;
    console.log("Files Uploaded: " + files)
    console.log("First file, which will be uploaded: " + files[0])
    const formData = new FormData()
    formData.append("image", files[0])
    // const filename = files[0].name
    if (files && files.length > 0) {
      // const file = files[0];
      // this.setState({ file });
      console.log("got the image")
      console.log(formData.get("image"))
      console.log('about to fetch...')
      fetch("/api/assets/upload", {
        method: "POST",
        body: formData
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Upload an image to AWS S3 bucket</h1>
        <input
          id='upload-image'
          type='file'
          accept='image/*'
        />
        <form onSubmit={this.uploadFile}>
          <button onClick={this.getImage} id='file-upload-button'>Upload</button>
        </form>
      </React.Fragment>
    );
  }
}