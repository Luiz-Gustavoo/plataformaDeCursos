const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }

  async pegaMatriculasAtivas(req, res) {
    const {estudante_id} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaMatriculasAtivasPorEstudante(Number(estudante_id));
    
      if(!listaMatriculas) {
        return res.status(404).json({mensagem: "Não foi possível encontrar matrículas para esse aluno"});
      } else {
        return res.status(200).json(listaMatriculas);
      }   
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaTodasAsMatriculas(req, res) {
    const {estudante_id} = req.params;
    try {
      const listaMatriculas = await pessoaServices.pegaTodasMatriculasPorEstudante(Number(estudante_id));

      if(!listaMatriculas) {
        return res.status(404).json({mensagem: "Não foi possível encontrar matrículas para esse aluno"});
      } else {
        return res.status(200).json(listaMatriculas);
      }

    } catch (erro) {
      return res.status(500).json({erro: erro.mensagem});
    }
  }

  async pegaCursos(req, res) {
    const {docente_id} = req.params;
    try {
      const listaCursos = await pessoaServices.pegaCursosPorDocente(Number(docente_id));
      if (!listaCursos) {
        return res.status(404).json({mensagem: "Não foi possível encontar cursos criados por esse docente"});
      } else {
        return res.status(200).json(listaCursos);
      }      
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaTodasAsPessoas(req, res) {
    try {
      const listaTodasPessoas = await pessoaServices.pegaTodasPessoasEscopo({
        order: [['id', 'DESC']]
      });
      return res.status(200).json(listaTodasPessoas);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async cancelaRegistroEstudante(req, res) {
    const {estudante_id} = req.params;
    try {
      await pessoaServices.cancelaPessoaEMatriculas(Number(estudante_id));
      return res.status(200).json({mensagem: `Matrículas ref. estudante ${estudante_id} cancelada`});
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
}

module.exports = PessoaController;