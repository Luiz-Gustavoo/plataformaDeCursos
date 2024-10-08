const Services = require("./Services.js");

class PessoaServices extends Services {
  // o modelo passado para o construtor é usado nas operações CRUD na classe Services
  constructor() {
    super('Pessoa');
  }
  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegaRegistroPorID(id);
    if(estudante !== null) {
      const listaMatriculas = await estudante.getMatriculasAtivas();

      if (listaMatriculas.length !== 0) {
        return listaMatriculas;
      }           
    } else {
      return false;
    }
  }

  async pegaTodasMatriculasPorEstudante(id) {
    const estudante = await super.pegaRegistroPorID(id);
    if (estudante !== null) {
      const listaMatriculas = await estudante.getTodasAsMatriculas();

      if (listaMatriculas.length !== 0) {
        return listaMatriculas;
      } else {
        return false;
      }
    }
  }

  async pegaTodasPessoasEscopo(options) {
    const listaPessoas = await super.pegaRegistrosPorEscopo('todosOsRegistros', options);
    return listaPessoas;
  }

  async pegaCursosPorDocente(id) {
    const docente = await super.pegaRegistroPorID(id);
    if (docente !== null) {
      const listaCursos =  await docente.getCursosCriados();

      if (listaCursos.length !== 0) {
        return listaCursos;
      }
    } else {
      return false;
    }
  }
}

module.exports = PessoaServices;