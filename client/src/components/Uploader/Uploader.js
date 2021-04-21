import React, { Component } from 'react';
import axios from 'axios';
// import { generateUploadURL } from '../../../backend/s3'
// import { UploadURL } from '../../../backend/s3'


const ReactS3 = require('react-s3');
console.log(ReactS3);
require('dotenv').config(); // Loading dotenv to have access to env variables
// 6-minute upload to react video
const config = {
  bucketName: process.env.BUCKET_NAME,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-2'
}

export default class Uploader extends Component {
  state = {
    message:''
  };

  getImage = e => {
    e.preventDefault();
    const files = document.querySelector("#upload-image").files;
    console.log(files)
    console.log(files[0])
    const formData = new FormData()
    formData.append("image", files[0])
    // const filename = files[0].name
    if (files && files.length > 0) {
      const file = files[0];
      // this.setState({ file });
      console.log("got the image")
      console.log(formData.get("image"))
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
          // onChange={this.getImage}
        />
        {/* <p>{this.state.message}</p> */}
        <form onSubmit={this.uploadFile}>
          <button onClick={this.getImage} id='file-upload-button'>Upload</button>
        </form>
      </React.Fragment>
    );
  }
}