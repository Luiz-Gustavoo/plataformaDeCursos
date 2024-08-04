const Services = require("./Services.js");


class PessoaServices extends Services {
  // o modelo passado para o construtor é usado nas operações CRUD na classe Services
  constructor() {
    super('Pessoa');
  }
    
}

module.exports = PessoaServices;