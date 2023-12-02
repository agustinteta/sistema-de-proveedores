const { validationResult } = require('express-validator');
const { createProductValidation, updateProductValidation, deleteProductValidation } = require('../middleware/validationMiddleware');
const Product = require('../models/productosModels');

const getProduct = async (req, res) => {
    try {
        const products = await Product.find();

        if (!products || products.length === 0) {
            return res.status(404).send('No se encontraron productos');
        }

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los productos');
    }
};


const createProduct = async (req, res) => {
    await Promise.all(createProductValidation.map(validation => validation(req, res)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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
    await Promise.all(updateProductValidation.map(validation => validation(req, res)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos del producto');
    }
};


const deleteProduct = async (req, res) => {
    await Promise.all(deleteProductValidation.map(validation => validation(req, res)));

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const productToDelete = await Product.findById(req.params.id);

        if (!productToDelete) {
            return res.status(404).send('Producto no encontrado');
        }

        await productToDelete.deleteOne();
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
