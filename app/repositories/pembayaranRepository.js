const {pembayaran} = require('../models')

const getAllPembayaran = () => {
    return pembayaran.findAll();
}
const getPembayaranById = (id) => {
    return pembayaran.findByPk(id);
}
const createPembayaran = (data) => {
    return pembayaran.create(data);
}
const getPembayaranBerhasil = () => {
    return pembayaran.findAll({
        where: {
            status: 'berhasil'
        }
    });
}
const getPembayaranGagal = () => {
    return pembayaran.findAll({
        where: {
            status: 'gagal'
        }
    });
}
const updatePembayaran = (id, data) => {
    return pembayaran.update(data, {
        where: {
            id: id
        }
    });
}
const deletePembayaran = (id) => {
    return pembayaran.destroy({
        where: {
            id: id
        }
    });
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