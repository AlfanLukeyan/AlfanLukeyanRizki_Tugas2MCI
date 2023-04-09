const pesertaService = require('../services/pesertaService');

const getAllPeserta = async (req, res) => {
    pesertaService.getAllPeserta()
    .then (peserta => {
        if (!peserta) {
            res.status(404).send({
                status : 'eror',
                message : 'Data peserta tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data peserta berhasil ditemukan',
                data : {
                    peserta
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
const getPesertaById = async (req, res) => {
    pesertaService.getPesertaById(req.params.id)
    .then (peserta => {
        if (!peserta) {
            res.status(404).send({
                status : 'eror',
                message : 'Data peserta tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data peserta berhasil ditemukan',
                data : {
                    peserta
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
const createPeserta = async (req, res) => {
    console.log(req.body);
    pesertaService.createPeserta(req.body)
    .then (peserta => {
        res.status(200).send({
            status : 'success',
            message : 'Data peserta berhasil ditambahkan',
            data : {
                peserta
            }
        });
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}
const updatePeserta = async (req, res) => {
    pesertaService.updatePeserta(req.params.id, req.body)
    .then (peserta => {
        res.status(200).send({
            status : 'success',
            message : 'Data peserta berhasil diubah',
            data : {
                peserta
            }
        });
    })
    .catch (error => {
        res.status(500).send({
            status : 'error',
            message : error.message,
            data : {}
        });
    });
}
const deletePeserta = async (req, res) => {
    pesertaService.deletePeserta(req.params.id)
    .then (peserta => {
        res.status(200).send({
            status : 'success',
            message : 'Data peserta berhasil dihapus',
            data : {
                peserta
            }
        });
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
    getAllPeserta,
    getPesertaById,
    createPeserta,
    updatePeserta,
    deletePeserta
}
