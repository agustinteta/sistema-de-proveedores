const Sale = require('../models/saleModel');
const mongoose = require('mongoose');

const getSales = async (req, res) => {
    try {
        const sales = await Sale.find();
        res.json(sales);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las ventas');
    }
};

const createSale = async (req, res) => {
    try {
//        const newSale = new Sale(req.body);
const newSale = new Sale({
    _id: new mongoose.Types.ObjectId(),
    ...req.body
  });
        const savedSale = await newSale.save();
        res.json(savedSale);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al hacer el alta de la venta');
    }
};

const updateSale = async (req, res) => {
    try {
        const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedSale);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos de la venta');
    }
};

const deleteSale = async (req, res) => {
    try {
        await Sale.findByIdAndDelete(req.params.id);
        res.send('Venta eliminada correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la venta');
    }
};

module.exports = {
    getSales,
    createSale,
    updateSale,
    deleteSale
};