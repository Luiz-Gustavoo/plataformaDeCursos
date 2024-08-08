const dataSource = require("../database/models");

class Services {

  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  // usa o modelo informado no construtor para fazer os operações CRUD
  async criarRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }
  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }

  async pegaRegistroPorID(id) {
    return dataSource[this.model].findByPk(id);
  }

  async atualizarRegistro(dadosAtualizados, id) {

    const registroExistente = await dataSource[this.model].findByPk(id);
    if (registroExistente == null) {
      return false;
    }
    const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {
      where: {id: id}
    });
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    } 
    return true;   
  }
  
  async deletarRegistro(id) {
    const options = {
      where: { id }
    };
    const registroDeletado = await dataSource[this.model].destroy(options); 
    return registroDeletado;
  }
  
}

module.exports = Services;