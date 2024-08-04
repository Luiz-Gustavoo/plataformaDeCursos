const {Router} = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const router = Router();
const pessoaController = new PessoaController();

router.post("/pessoas", (req, res) => pessoaController.criar(req, res));
router.get("/pessoas", (req, res) => pessoaController.pegaTodos(req, res));
router.get("/pessoas/:id", (req, res) => pessoaController.pegaPorID(req, res));
router.put("/pessoas/:id", (req, res) => pessoaController.atualizar(req, res));
router.delete("/pessoas/:id", (req, res) => pessoaController.deletar(req, res));


module.exports = router;