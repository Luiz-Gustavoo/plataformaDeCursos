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

  async pegaCursos(req, res) {
    const {docenteId} = req.params;
    try {
      const listaCursos = await pessoaServices.pegaCursosPorDocente(Number(docenteId));
      if (!listaCursos) {
        return res.status(404).json({mensagem: "Não foi possível encontar cursos criados por esse docente"});
      } else {
        return res.status(200).json(listaCursos);
      }      
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
}

module.exports = PessoaController;