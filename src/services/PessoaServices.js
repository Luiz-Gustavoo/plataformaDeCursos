const Services = require("./Services.js");


class PessoaServices extends Services {
  // o modelo passado para o construtor é usado nas operações CRUD na classe Services
  constructor() {
    super('Pessoa');
  }
  async pegaMatriculasPorEstudante(id) {
    const estudante = await super.pegaRegistroPorID(id);
    const listaMatriculas = await estudante.getAulasMatriculadas();
    return listaMatriculas;
  }
    
}

module.exports = PessoaServices;