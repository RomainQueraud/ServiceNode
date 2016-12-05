'use strict'

//node test2.js localhost 1337

var ip = process.argv[2];
var port = parseInt(process.argv[3]);

var http = require('http');

http.createServer(function(req,res) {
  var requestData = '';

  req.on('data', function(chunck){
    requestData += chunck.toString();
  });

  req.on('end', function(){
    res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
    console.log("J'ai reçu le message : " + requestData);
    res.end("Merci pour ton message : " + requestData);
  });

}).listen(port, ip);

console.log("Je suis disponible à l'adresse : http://"+ip+":"+port+"/");
