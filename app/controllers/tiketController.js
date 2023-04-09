const tiketService = require('../services/tiketService');

const getAllTiket = async (req, res) => {
    tiketService.getAllTiket()
    .then (tiket => {
        if (!tiket) {
            res.status(404).send({
                status : 'eror',
                message : 'Data tiket tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data tiket berhasil ditemukan',
                data : {
                    tiket
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

const getTiketById = async (req, res) => {
    tiketService.getTiketById(req.params.id)
    .then (tiket => {
        if (!tiket) {
            res.status(404).send({
                status : 'eror',
                message : 'Data tiket tidak ditemukan',
                data : {}
            });
        }
        else {
            res.status(200).send({
                status : 'success',
                message : 'Data tiket berhasil ditemukan',
                data : {
                    tiket
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

const createTiket = async (req, res) => {
    tiketService.createTiket(req.body)
    .then (tiket => {
        res.status(201).send({
            status : 'success',
            message : 'Data tiket berhasil ditambahkan',
            data : {
                tiket
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

const updateTiket = async (req, res) => {
    tiketService.updateTiket(req.params.id, req.body)
    .then (tiket => {
        res.status(200).send({
            status : 'success',
            message : 'Data tiket berhasil diubah',
            data : {
                tiket
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

const deleteTiket = async (req, res) => {
    tiketService.deleteTiket(req.params.id)
    .then (tiket => {
        res.status(200).send({
            status : 'success',
            message : 'Data tiket berhasil dihapus',
            data : {
                tiket
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
    getAllTiket,
    getTiketById,
    createTiket,
    updateTiket,
    deleteTiket
}
