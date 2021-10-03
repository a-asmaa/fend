var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const app = express()
app.use(express.json())  // instead of body parser

var axios = require('axios');
var key = process.env.API_KEY;




app.use(express.static('dist'))
app.use(cors())


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



app.post('/getData', function (req, res) {

    let url = req.body.url;
    console.log(url);
   
    console.log(`https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}`);
    var config = {
        method: 'post',
        url: `https://api.meaningcloud.com/sentiment-2.1?key=${key}&url=${url}&lang=en`,
        headers: { }
    };
    
    axios(config)
    .then(function (response) {
     console.log(JSON.stringify(response.data));
     let data = {
        agreement: response.data.agreement,
        confidence: response.data.confidence,
        irony: response.data.irony,
        model: response.data.model
     }
     res.send(data)
    })
    .catch(function (error) {
    console.log(error);
    });
    

})