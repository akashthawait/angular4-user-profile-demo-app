const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');

var userData = require('../db/users')
var dbPath = __dirname+"/../db/users.json";
console.log(dbPath);
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
})

module.exports = router;