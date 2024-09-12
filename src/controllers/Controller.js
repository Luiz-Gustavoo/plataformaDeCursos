/* eslint-disable no-unused-vars */
const converteIds = require("../utils/conversorDeString.js");

class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async criar(req, res) {
    const teste = 1;
    const dadosParaCriacao = req.body;
    try {
      const novoRegistro = await this.entidadeService.criarRegistro(dadosParaCriacao);
      return res.status(201).json({mensagem: "Registro criado com sucesso"});
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
  
  async pegaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaPorID(req, res) {
    const {id} = req.params;
    try {
      const idEncontrado = await this.entidadeService.pegaRegistroPorID(id);
        if(idEncontrado !== null) {
          res.status(200).json(idEncontrado);
        } else {
          res.status(404).json({mensagem: "Registro não encontrado com esse ID"});
        }
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async pegaUm(req, res) {
    const {...params} = req.params;
    const where = converteIds(params);
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistro(where);
      return res.status(200).json(umRegistro);
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }   
  }

  async atualizar(req, res) {
    const {...params} = req.params;
    const dadosAtualizados = req.body;
    const where = converteIds(params);
    try {
      const foiAtualizado = await this.entidadeService.atualizarRegistro(dadosAtualizados, where);
      if (!foiAtualizado) {
        res.status(400).json({mensagem: "O registro não foi atualizado"});
      } else {
        res.status(200).json({mensagem: "Registro atualizado com sucesso"});
      }
    } catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }

  async deletar(req, res) {
    const {id} = req.params;    
    try {
      const foiDeletado = await this.entidadeService.deletarRegistro(id);
      if (!foiDeletado) {
        res.status(400).json({mensagem: "Não foi possível deletar o excluir o registro"});
      } else {
        res.status(200).json({mensagem: "Registro excluído com sucesso"});
      }
      
    }  catch (erro) {
      return res.status(500).json({erro: erro.message});
    }
  }
}
module.exports = Controller;