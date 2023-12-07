const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const clientRoutes = require('./routes/clientRoute');
const productRoutes = require('./routes/productRoute');
const saleRoutes = require('./routes/saleRoute');
const Client = require('./models/clientModel');
const Product = require('./models/productModel');
const Sale = require('./models/saleModel');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurar Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

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
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/clientes', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'client_list.html'));
});
app.get('/nuevo_cliente', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'client_create.html'));
});
app.get('/productos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'product_list.html'));
});

app.get('/nueva_venta', async (req, res) => {
  try {
    // Obtener los datos de los clientes desde la base de datos
    const clientes = await Client.find({}, 'nombreFantasia');
    
    // Obtener los datos de los productos desde la base de datos
    const productos = await Product.find({}, 'name');

    res.render('nueva_venta', { clientes, productos });
  } catch (error) {
    console.error(`Error al obtener los datos: ${error}`);
    res.status(500).send('Error interno del servidor');
  }
});

app.get('/ventas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'ventas.html'));
});

app.use('/clients', clientRoutes);
app.use('/products', productRoutes);
app.use('/sales', saleRoutes);

// Eventos de conexión y error de MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}/`);
});
