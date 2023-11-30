const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/cliente');
const app = express();
const cors = require('cors')

app.use(cors())
const port = 3000;

// Configuración de MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.vhunetu.mongodb.net/Distribuidora', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use('/dev', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});