const dataSource = require("../database/models");

class Services {

  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  // usa o modelo informado no construtor para fazer os operações CRUD
  async criarRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }
  async pegaTodosOsRegistros(where = {}) {
    return dataSource[this.model].findAll({where: {...where}});
  }

  async pegaRegistrosPorEscopo(escopo) {
    return dataSource[this.model].scope(escopo).findAll();
  }

  async pegaRegistrosPorFiltro(coluna, valor) {
    return dataSource[this.model].findAll({
      where: {[coluna]: valor}
    });
  }

  async pegaRegistroPorID(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({where: {...where}});
  }

  async atualizarRegistro(dadosAtualizados, where) {

    const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {where: {...where}});
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    } 
    return true;   
  }
  
  async deletarRegistro(id) {
    
    const registroDeletado = await dataSource[this.model].destroy({where: {id: id}}); 
    return registroDeletado;
  }
  
}

module.exports = Services;