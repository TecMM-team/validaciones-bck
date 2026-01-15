const { Router } = require("express");
const { getValidacion } = require("../controllers/validacion");

const routerValidacion = Router();

routerValidacion.get('/:ui', getValidacion);

module.exports = (app) => app.use('/validacion',routerValidacion);