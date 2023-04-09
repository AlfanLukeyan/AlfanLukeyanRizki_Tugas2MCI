const pesertaRepository = require('../repositories/pesertaRepository');

const getAllPeserta = async () => {
    try {
        const result = await pesertaRepository.getAllPeserta();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getPesertaById = async (id) => {
    try {
        const result = await pesertaRepository.getPesertaById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createPeserta = async (data) => {
    try {
        const result = await pesertaRepository.createPeserta(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updatePeserta = async (id, data) => {
    try {
        const result = await pesertaRepository.updatePeserta(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deletePeserta = async (id) => {
    try {
        const result = await pesertaRepository.deletePeserta(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAllPeserta,
    getPesertaById,
    createPeserta,
    updatePeserta,
    deletePeserta
}
