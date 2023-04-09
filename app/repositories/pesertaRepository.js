const {peserta} = require('../models');

const getAllPeserta = () => {
    return peserta.findAll();
}
const getPesertaById = (id) => {
    return peserta.findByPk(id);
}
const createPeserta = (data) => {
    return peserta.create(data);
}
const updatePeserta = (id, data) => {
    return peserta.update(data, {
        where: {
            id: id
        }
    });
}
const deletePeserta = (id) => {
    return peserta.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllPeserta,
    getPesertaById,
    createPeserta,
    updatePeserta,
    deletePeserta
}
