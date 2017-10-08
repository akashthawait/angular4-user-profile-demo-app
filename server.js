var app = require('express')();
var http = require('http').Server(app);
require('./routes.js').routing(app);
var port = process.env.PORT || 5000;
http.listen(port, function () {
    console.log('listening on *:' + port);
});
process.on('uncaughtException', function (err) {
    console.log('Uncaught exception has been handled. Exception caught is ');
    console.log(err.toString());
    console.log(err.stack);
});
