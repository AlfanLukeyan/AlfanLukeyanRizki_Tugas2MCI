const seminarRepository = require('../repositories/seminarRepository');

const getAllSeminar = async () => {
    try {
        const result = await seminarRepository.getAllSeminar();
        return result;
    }
    catch (err) {
        throw err;
    }
}
const getSeminarById = async (id) => {
    try {
        const result = await seminarRepository.getSeminarById(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const createSeminar = async (data) => {
    try {
        const result = await seminarRepository.createSeminar(data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const updateSeminar = async (id, data) => {
    try {
        const result = await seminarRepository.updateSeminar(id, data);
        return result;
    }
    catch (err) {
        throw err;
    }
}
const deleteSeminar = async (id) => {
    try {
        const result = await seminarRepository.deleteSeminar(id);
        return result;
    }
    catch (err) {
        throw err;
    }
}

module.exports = {
    getAllSeminar,
    getSeminarById,
    createSeminar,
    updateSeminar,
    deleteSeminar
}
