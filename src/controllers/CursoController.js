const {Op} = require('sequelize');
const Controller = require('./Controller.js');
const CursoServices = require('../services/CursoServices.js');

const cursoServices = new CursoServices();

class CategoriaController extends Controller {
    constructor() {
        super(cursoServices);
    }

    async pegaCursos(req, res) {
        const {data_inicial, data_final} = req.query;
        const where = {};

        //se existirem os param, criar uma prop {}
        data_inicial || data_final ? where.data_inicio = {} : null;
        // se existir data inicial, adiciona a prop gte com o valor
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
        // se existir data final, idem
        data_final ? where.data_inicio[Op.lte] = data_final : null;

        try {
            const listaDeRegistros = await cursoServices.pegaTodosOsRegistros(where);
            res.status(200).json(listaDeRegistros);
        } catch (erro) {
            res.status(500).json({message: erro.message});
        }
    }

    async pegaCursosAgrupadosPorDocente(req, res) {

        const listaCursos = await cursoServices.pegaEContaRegistros({
            where: {
                
            },
            attributes: ['docente_id'],
            group: ['docente_id'],
            order: [['id', 'ASC']]
        });
        return res.status(200).json(listaCursos);
    }
}


module.exports = CategoriaController;