const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer();

const app = express();
const port = process.env.PORT || 5000;

//ANY REQUEST COMING IN, TRANSFER ALL BODY INTO JSON
app.use(express.json());

//ALLOW CROSS ORIGIN FROM CLIENT LOCALHOST
app.use(cors());

//CREATING POST ENDPOINT  /FILE
app.post("/file", upload.single("file", (req, res) => {
    console.log('body', req.file.length, req.file);

    res.json({success: true})
}))

app.listen(port, error => {
    if(error) throw error
    console.log(`Server up and running on port ${port}`);
})
