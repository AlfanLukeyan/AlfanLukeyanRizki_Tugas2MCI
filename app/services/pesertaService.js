const pesertaReposiroty = require('../repositories/pesertaRepository');

const getAllPeserta = async () => {
    try {
        const result = await pesertaReposiroty.getAllPeserta();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getPesertaById = async (id) => {
    try {
        const result = await pesertaReposiroty.getPesertaById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createPeserta = async (data) => {
    try {
        const result = await pesertaReposiroty.createPeserta(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updatePeserta = async (id, data) => {
    try {
        const result = await pesertaReposiroty.updatePeserta(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deletePeserta = async (id) => {
    try {
        const result = await pesertaReposiroty.deletePeserta(id);
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
