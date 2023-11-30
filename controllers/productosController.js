const Product = require('../models/productosModels');

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};

const createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el producto');
    }
};

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos del producto');
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.send('Producto eliminado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el producto');
    }
};

module.exports = {
    getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
