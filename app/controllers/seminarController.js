const seminarService = require('../services/seminarService');

const getAllSeminar = async (req, res) => {
    seminarService.getAllSeminar()
    .then (seminar => {
        if (!seminar) {
            res.status(404).send({
                status : 'eror',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : {
                    seminar
                }
            });
        }
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}

const getSeminarById = async (req, res) => {
    seminarService.getSeminarById(req.params.id)
    .then (seminar => {
        if (!seminar) {
            res.status(404).send({
                status : 'eror',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : {
                    seminar
                }
            });
        }
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}

const createSeminar = async (req, res) => {
    seminarService.createSeminar(req.body)
    .then (seminar => {
        if (!seminar) {
            res.status(404).send({
                status : 'eror',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : {
                    seminar
                }
            });
        }
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}

const updateSeminar = async (req, res) => {
    seminarService.updateSeminar(req.params.id, req.body)
    .then (seminar => {
        if (!seminar) {
            res.status(404).send({
                status : 'eror',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : {
                    seminar
                }
            });
        }
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}

const deleteSeminar = async (req, res) => {
    seminarService.deleteSeminar(req.params.id)
    .then (seminar => {
        if (!seminar) {
            res.status(404).send({
                status : 'eror',
                message : 'Data seminar tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data seminar berhasil ditemukan',
                data : {
                    seminar
                }
            });
        }
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}

module.exports = {
    getAllSeminar,
    getSeminarById,
    createSeminar,
    updateSeminar,
    deleteSeminar
}

