const {Router} = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require('../controllers/MatriculaController.js');

const router = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

router.post("/pessoas", (req, res) => pessoaController.criar(req, res));
router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaPorID(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualizar(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.deletar(req, res));
router.get("/pessoas/:docenteId/cursos", (req, res) => pessoaController.pegaCursos(req, res));
router.get("/pessoas/:estudanteId/matriculas", (req, res) => pessoaController.pegaMatriculas(req, res));
router.post("/pessoas/:estudanteId/matriculas", (req, res) => matriculaController.criar(req, res));


module.exports = router;