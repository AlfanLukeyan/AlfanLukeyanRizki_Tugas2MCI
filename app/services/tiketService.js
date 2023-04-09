const tiketRepository = require('../repositories/tiketRepository');

const getAllTiket = async () => {
    try {
        const result = await tiketRepository.getAllTiket();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getTiketById = async (id) => {
    try {
        const result = await tiketRepository.getTiketById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createTiket = async (data) => {
    try {
        const result = await tiketRepository.createTiket(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updateTiket = async (id, data) => {
    try {
        const result = await tiketRepository.updateTiket(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deleteTiket = async (id) => {
    try {
        const result = await tiketRepository.deleteTiket(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAllTiket,
    getTiketById,
    createTiket,
    updateTiket,
    deleteTiket
}
