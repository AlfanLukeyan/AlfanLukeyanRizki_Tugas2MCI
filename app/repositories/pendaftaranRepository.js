const {pendaftaran} = require('../models')

const getAllPendaftaran = () => {
    return pendaftaran.findAll();
}
const getPendaftaranById = (id) => {
    return pendaftaran.findByPk(id);
}
const createPendaftaran = (data) => {
    return pendaftaran.create(data);
}
const updatePendaftaran = (id, data) => {
    return pendaftaran.update(data, {
        where: {
            id: id
        }
    });
}
const deletePendaftaran = (id) => {
    return pendaftaran.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllPendaftaran,
    getPendaftaranById,
    createPendaftaran,
    updatePendaftaran,
    deletePendaftaran
}
