const lokasiService = require('../services/lokasiService');

const getAllLokasi = async (req, res) => {
    lokasiService.getAllLokasi()
    .then (lokasi => {
        if (!lokasi) {
            res.status(404).send({
                status : 'eror',
                message : 'Data lokasi tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data lokasi berhasil ditemukan',
                data : {
                    lokasi
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
const getLokasiById = async (req, res) => {
    lokasiService.getLokasiById(req.params.id)
    .then (lokasi => {
        if (!lokasi) {
            res.status(404).send({
                status : 'eror',
                message : 'Data lokasi tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data lokasi berhasil ditemukan',
                data : {
                    lokasi
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
const createLokasi = async (req, res) => {
    lokasiService.createLokasi(req.body)
    .then (lokasi => {
        if (!lokasi) {
            res.status(404).send({
                status : 'eror',
                message : 'Data lokasi tidak dapat ditambahkan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data lokasi berhasil ditambahkan',
                data : {
                    lokasi
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
const updateLokasi = async (req, res) => {
    lokasiService.updateLokasi(req.params.id, req.body)
    .then (lokasi => {
        if (!lokasi) {
            res.status(404).send({
                status : 'eror',
                message : 'Data lokasi tidak dapat diperbarui',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data lokasi berhasil diperbarui',
                data : {
                    lokasi
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
const deleteLokasi = async (req, res) => {
    lokasiService.deleteLokasi(req.params.id)
    .then (lokasi => {
        if (!lokasi) {
            res.status(404).send({
                status : 'eror',
                message : 'Data lokasi tidak berhasil dihapus',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data lokasi berhasil dihapus',
                data : {
                    lokasi
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
    getAllLokasi,
    getLokasiById,
    createLokasi,
    updateLokasi,
    deleteLokasi
}