const pendaftaranService = require('../services/pendaftaranService');

const getAllPendaftaran = async (req, res) => {
    pendaftaranService.getAllPendaftaran()
    .then (pendaftaran => {
        if (!pendaftaran) {
            res.status(404).send({
                status : 'eror',
                message : 'Data pendaftaran tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data pendaftaran berhasil ditemukan',
                data : {
                    pendaftaran
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
const getPendaftaranById = async (req, res) => {
    pendaftaranService.getPendaftaranById(req.params.id)
    .then (pendaftaran => {
        if (!pendaftaran) {
            res.status(404).send({
                status : 'eror',
                message : 'Data pendaftaran tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data pendaftaran berhasil ditemukan',
                data : {
                    pendaftaran
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
const createPendaftaran = async (req, res) => {
    pendaftaranService.createPendaftaran(req.body)
    .then (pendaftaran => {
        res.status(200).send({
            status : 'success',
            message : 'Data pendaftaran berhasil ditambahkan',
            data : {
                pendaftaran
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
const updatePendaftaran = async (req, res) => {
    pendaftaranService.updatePendaftaran(req.params.id, req.body)
    .then (pendaftaran => {
        res.status(200).send({
            status : 'success',
            message : 'Data pendaftaran berhasil diubah',
            data : {
                pendaftaran
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
const deletePendaftaran = async (req, res) => {
    pendaftaranService.deletePendaftaran(req.params.id)
    .then (pendaftaran => {
        res.status(200).send({
            status : 'success',
            message : 'Data pendaftaran berhasil dihapus',
            data : {
                pendaftaran
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
    getAllPendaftaran,
    getPendaftaranById,
    createPendaftaran,
    updatePendaftaran,
    deletePendaftaran
}
