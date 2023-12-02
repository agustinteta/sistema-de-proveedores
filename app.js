const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/cliente');
const productRoutes = require('./routes/producto');
const app = express();
const port = 3000;

// Configuración de MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.vhunetu.mongodb.net/Distribuidora', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/clientes', clientRoutes);
app.use('/productos', productRoutes);

// Eventos de conexión y error de MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});
