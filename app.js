const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/cliente');
const app = express();
const cors = require('cors')

var http = require("http");


app.use(cors())
const port = 3000;

http.createServer(function (request, response) {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  // Send the response body as "Hello World"
  response.end('Hello World\n');
}).listen(port);

console.log(`Server running at http://127.0.0.1:${port}/`);


// Configuración de MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.vhunetu.mongodb.net/Distribuidora', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use('/dev', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});