// Marcos Vinicius Rodrigue dos Santos - 30394007
// Importa a biblioteca que use o protocolo Http e URL
const http = require('http');
const url = require('url');
const fs = require('fs');

function readFile(response, file){
    fs.readFile(file, function (err, data){
        response.end(data);
    });
    }
// Criar uma função para trabalhar no servidor
var callback = function (request, response){
   
    var parts = url.parse(request.url);
    var path = parts.path;

    //Verifica a rota
    if (parts.path == "/"){
        response.writeHead(200, {"Content-type": "text/html"});
        response.end("Site batata.html");
    }else if (parts.path == "/rota1"){
        response.writeHead(200, {"Content-type": "application/pdf"});
        readFile(response, "arquivo1.pdf");
    }else if (parts.path == "/rota2"){
        response.writeHead(200, {"Content-type": "application/json"});
        readFile(response, "arquivo2.json");
    }else if (parts.path == "/rota3"){
        response.writeHead(200, {"Content-type": "image/png"});
        readFile(response, "arquivo3.png");
    }else if (parts.path == "/rota4"){
        response.writeHead(200, {"Content-type": "application/zip"});
        readFile(response, "arquivo4.zip");
    }else if (parts.path == "/rota5"){
            response.writeHead(200, {"Content-type": "text/html"});
            readFile(response, "Geradores.html");
    }else{
        response.end("Site 404");
    }
}

// Criar o servidor
var server = http.createServer(callback)
server.listen(3000);
console.log("[Server - OK]...... Servidor montado em http://localhost:3000");
