const {Router} = require("express");
const CategoriaController = require('../controllers/CategoriaController.js');

const router = Router();
const categoriaController = new CategoriaController();

router.post("/categorias", (req, res) => categoriaController.criar(req, res));
router.get("/categorias", (req, res) => categoriaController.pegaTodos(req, res));
router.get("/categorias/:id", (req, res) => categoriaController.pegaPorID(req, res));
router.put("/categorias/:id", (req, res) => categoriaController.atualizar(req, res));
router.delete("/categorias/:id", (req, res) => categoriaController.deletar(req, res));


module.exports = router;