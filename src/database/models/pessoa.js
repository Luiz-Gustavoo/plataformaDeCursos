'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoa.hasMany(models.Curso, {
        foreignKey: 'docente_id',
        as: 'cursosCriados'
      });
      Pessoa.hasMany(models.Matricula, {
        foreignKey: 'estudante_id',
        scope: {status: 'matriculado'},
        as: 'aulasMatriculadas'
      });
    }
  }
  Pessoa.init({
    nome: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
            args: true,
            msg: "Formato do E-mail inválido"
        }           
      }
    },
    cpf: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoa',
    tableName: 'Pessoas',
    paranoid: true,
    scopes: {todosOsRegistros: {
      where: {}
    }},
    defaultScope: {
      where: {
        ativo: true
      }
    }
  });
  return Pessoa;
};