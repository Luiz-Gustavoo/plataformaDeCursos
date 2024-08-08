const {Router} = require("express");
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();
const matriculaController = new MatriculaController();

router.get("/matriculas", (req, res) => matriculaController.pegaTodos(req, res));

module.exports = router;