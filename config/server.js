const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const lokasiRoute = require('../app/routes/lokasiRoute');
const seminarRoute = require('../app/routes/seminarRoute');
const pesertaRoute = require('../app/routes/pesertaRoute');
const pendaftaranRoute = require('../app/routes/pendaftaranRoute');
const pembayaranRoute = require('../app/routes/pembayaranRoute');
const tiketRoute = require('../app/routes/tiketRoute');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.use('/lokasi', lokasiRoute);
app.use('/seminar', seminarRoute);
app.use('/peserta', pesertaRoute);
app.use('/pendaftaran', pendaftaranRoute);
app.use('/pembayaran', pembayaranRoute);
app.use('/tiket', tiketRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));