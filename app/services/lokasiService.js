const lokasiRepository = require('../repositories/lokasiRepository');

const getAllLokasi = async () => {
    try {
        const result = await lokasiRepository.getAllLokasi();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getLokasiById = async (id) => {
    try {
        const result = await lokasiRepository.getLokasiById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createLokasi = async (data) => {
    try {
        const result = await lokasiRepository.createLokasi(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updateLokasi = async (id, data) => {
    try {
        const result = await lokasiRepository.updateLokasi(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deleteLokasi = async (id) => {
    try {
        const result = await lokasiRepository.deleteLokasi(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAllLokasi,
    getLokasiById,
    createLokasi,
    updateLokasi,
    deleteLokasi
}