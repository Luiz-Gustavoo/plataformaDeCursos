const {Router} = require("express");
const CursoController = require('../controllers/CursoController.js');

const router = Router();
const cursoController = new CursoController();

router.post("/cursos", (req, res) => cursoController.criar(req, res));
router.get("/cursos", (req, res) => cursoController.pegaTodos(req, res));
router.get("/cursos/:id", (req, res) => cursoController.pegaPorID(req, res));
router.put("/cursos/:id", (req, res) => cursoController.atualizar(req, res));
router.delete("/cursos/:id", (req, res) => cursoController.deletar(req, res));


module.exports = router;