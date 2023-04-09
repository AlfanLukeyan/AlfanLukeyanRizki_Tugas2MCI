const {tiket} = require('../models')

const getAllTiket = () => {
    return tiket.findAll();
}
const getTiketById = (id) => {
    return tiket.findByPk(id);
}
const createTiket = (data) => {
    return tiket.create(data);
}
const updateTiket = (id, data) => {
    return tiket.update(data, {
        where: {
            id: id
        }
    });
}
const deleteTiket = (id) => {
    return tiket.destroy({
        where: {
            id: id
        }
    });
}
