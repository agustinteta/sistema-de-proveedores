const Client = require('../models/clientModel');

const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los clientes');
    }
};

const createClient = async (req, res) => {
    try {
        const newClient = new Client(req.body);
        const savedClient = await newClient.save();
        res.json(savedClient);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al hacer el alta del cliente');
    }
};

const updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedClient);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar los datos del cliente');
    }
};

const deleteClient = async (req, res) => {
    try {
        await Client.findByIdAndDelete(req.params.id);
        res.send('Cliente eliminado correctamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar el cliente');
    }
};

module.exports = {
    getClients,
  createClient,
  updateClient,
  deleteClient
};
