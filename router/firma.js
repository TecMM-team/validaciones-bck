const { Router } = require("express");
const multer = require('multer');
const upload = multer();
const routerFirmas = Router();
const {firma_individual, firma_multiple} = require("../controllers/firma");

const cpUpload = upload.fields([
  { name: 'llave', maxCount: 1 },
  { name: 'certificado', maxCount: 1 }
]);

routerFirmas.post('/individual', cpUpload, firma_individual);
routerFirmas.post('/multiple', cpUpload, firma_multiple);

module.exports = (app) => app.use('/firma', routerFirmas);