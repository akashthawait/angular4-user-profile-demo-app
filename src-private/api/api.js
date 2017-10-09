const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');

var userData = require('../db/users')
var dbPath = __dirname + "/../db/users.json";
// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/getUser', (req, res) => {
    console.log("USERS GET");
    response.data = userData;
    response.message = "Success";
    res.json(response);
});
router.put("/updateUser", (req, res) => {
    console.log("USERS PUT");
    console.log("req params", req.body);
    jsonfile.writeFile(dbPath, req.body, { spaces: 2, EOL: '\r\n' }, function (err) {
        if (err) {
            response.message = err;
        } else {
            response.message = "Success"
        }
        res.json(response);
    })
});
router.get("/getNearByGym", (req, resp) => {
    console.log("req params", req.query);
    var apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + req.query.lat + ',' + req.query.lng + '&radius=' + req.query.radius + '&type=' + req.query.type + '&sensor=false&key=AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM';
    console.log(apiUrl);
    const https = require('https');
    https.get(apiUrl,(res)=>{
        var data = '';
        res.on('data',(chunk)=>{
            data += chunk;
        });
        res.on('end',()=>{
            // console.log(JSON.parse(data));            
            response.data = JSON.parse(data);
            response.message = "Success";
            resp.json(response);
        })
    }).on("error",(err)=>{
        console.log(err)
        response.message = "Error"
        resp.json(response)
    })
    // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +req.query.lat + ',' + req.query.lng + '&radius=radius&type=type&sensor=false&key=AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM
})

module.exports = router;