// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

var path = require('path');
var router = express.Router();
 
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res, next) {
    res.sendFile(path.resolve(__dirname + '/public/index.html'));
});


