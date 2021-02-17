/*jslint node: true, indent: 2 */
'use strict';
var restify = require('restify');

// Exports a function that declare HTTP functions
//[EnableCors(origins= "http://localhost:8080", headers="*", methods= "*")] Metodo que intente para activar el cors, en este dominio, instalando plugins para el cors
module.exports = function (server) {
  // Methods that consider request and response as input to invoice a business or logical function
  const names = {
    1:{
      name: 'john',
      lastName: 'carter'
    }
  }
  server.get('/names', (req, res, next) =>{
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify(names))
  })
};