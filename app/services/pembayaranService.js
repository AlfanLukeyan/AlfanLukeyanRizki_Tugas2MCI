const pembayaranRepository = require('../repositories/pembayaranRepository');
const { mkcol } = require('../routes/lokasiRoute');

const getAllPembayaran = async () => {
    try {
        const result = await pembayaranRepository.getAllPembayaran();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getPembayaranById = async (id) => {
    try {
        const result = await pembayaranRepository.getPembayaranById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createPembayaran = async (data) => {
    try {
        const result = await pembayaranRepository.createPembayaran(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getPembayaranBerhasil = async () => {
    try {
        const result = await pembayaranRepository.getPembayaranBerhasil();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getPembayaranGagal = async () => {
    try {
        const result = await pembayaranRepository.getPembayaranGagal();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updatePembayaran = async (id, data) => {
    try {
        const result = await pembayaranRepository.updatePembayaran(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deletePembayaran = async (id) => {
    try {
        const result = await pembayaranRepository.deletePembayaran(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAllPembayaran,
    getPembayaranById,
    createPembayaran,
    updatePembayaran,
    deletePembayaran,
    getPembayaranBerhasil,
    getPembayaranGagal
}
