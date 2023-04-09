const {lokasi} = require('../models');

const getAllLokasi = () => {
    return lokasi.findAll();
};
const getLokasiById = (id) => {
    return lokasi.findByPk(id);
};
const createLokasi = (data) => {
    return lokasi.create(data);
};
const updateLokasi = (id, data) => {
    return lokasi.update(data, {
        where: {
            id: id
        }
    });
};
const deleteLokasi = (id) => {
    return lokasi.destroy({
        where: {
            id: id
        }
    });
};


module.exports = {
    getAllLokasi,
    getLokasiById,
    createLokasi,
    updateLokasi,
    deleteLokasi
};

