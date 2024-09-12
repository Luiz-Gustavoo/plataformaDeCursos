const {Router} = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require('../controllers/MatriculaController.js');
const CursoController = require('../controllers/CursoController.js');

const router = Router();

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();
const cursoController = new CursoController();


router.get("/pessoas/:estudante_id/matriculas/todos", (req, res) => pessoaController.pegaTodasAsMatriculas(req, res));
router.get("/pessoas/:estudante_id/matriculas/:id", (req, res) => matriculaController.pegaUm(req, res));
router.get("/pessoas/:docente_id/cursos/:id", (req, res) => cursoController.pegaUm(req, res));
router.put('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.atualizar(req, res));
router.delete('/pessoas/:estudante_id/matriculas/:id', (req, res) => matriculaController.deletar(req, res));
router.post("/pessoas/:estudante_id/matriculas", (req, res) => matriculaController.criar(req, res));
router.get("/pessoas/:docente_id/cursos", (req, res) => pessoaController.pegaCursos(req, res));
router.get("/pessoas/:estudante_id/matriculas", (req, res) => pessoaController.pegaMatriculasAtivas(req, res));
router.post("/pessoas", (req, res) => pessoaController.criar(req, res));
router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/todos', (req, res) => pessoaController.pegaTodasAsPessoas(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaPorID(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualizar(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.deletar(req, res));



module.exports = router;