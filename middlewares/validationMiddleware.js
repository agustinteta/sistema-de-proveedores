const { body } = require('express-validator');

//VALIDACIONES PARA PRODUCTOS
const createProductValidation = [
    body('name').notEmpty().withMessage('El nombre no puede estar vacío'),
    body('price').isNumeric().withMessage('El precio debe ser un número válido'),
    body('stock').isInt().withMessage('El stock debe ser un número entero'),
];

const updateProductValidation = [
    body('name').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    body('price').optional().isNumeric().withMessage('El precio debe ser un número válido'),
    body('stock').optional().isInt().withMessage('El stock debe ser un número entero'),
];

const deleteProductValidation = [
    //param('id').isMongoId().withMessage('ID de producto no válido'), 
];

module.exports = {
    createProductValidation,
    updateProductValidation,
    deleteProductValidation,
};
