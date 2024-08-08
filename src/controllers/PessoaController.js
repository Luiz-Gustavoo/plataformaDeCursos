const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculas(req, res) {
    const {estudanteId} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
    
      if(!listaMatriculas) {
        return res.status(404).json({mensagem: "Não foi possível encontrar matrículas para esse aluno"});
      } else {
        return res.status(200).json(listaMatriculas);
      }
      
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
}

module.exports = PessoaController;