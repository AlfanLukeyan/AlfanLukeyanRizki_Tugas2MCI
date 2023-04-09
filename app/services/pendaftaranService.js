const pendaftaranRepository = require('../repositories/pendaftaranRepository');

const getAllPendaftaran = async () => {
    try {
        const result = await pendaftaranRepository.getAllPendaftaran();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getPendaftaranById = async (id) => {
    try {
        const result = await pendaftaranRepository.getPendaftaranById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createPendaftaran = async (data) => {
    try {
        const result = await pendaftaranRepository.createPendaftaran(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updatePendaftaran = async (id, data) => {
    try {
        const result = await pendaftaranRepository.updatePendaftaran(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deletePendaftaran = async (id) => {
    try {
        const result = await pendaftaranRepository.deletePendaftaran(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAllPendaftaran,
    getPendaftaranById,
    createPendaftaran,
    updatePendaftaran,
    deletePendaftaran
}
