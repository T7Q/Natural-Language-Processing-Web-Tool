var path = require('path');
const express = require('express');
// const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser');
const cors = require('cors');
const aylien = require('aylien_textapi');

// Start up an instance of app
const app = express()

// initialize main project folder
app.use(express.static('dist'))

//Configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Set up server: designates what port the app will listen to for incoming requests
app.listen(8085, function () {
    console.log('Example app listening on port 8085!')
})

// set dotenv
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

// ENDPOINTS

// endpoint to get main page
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// endpoint to get info from Aylien
app.post('/api', function (req, res) {
    textapi.sentiment(req.body, function(error, response) {
        if (error === null) {
            if (error === null) {
                res.status(200).send(response);
            } else {
                res.status(422).send(error);
            }
        }
      });
 
})
