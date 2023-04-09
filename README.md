# Tugas 2 Oprec MCI 2023: API Framework Express JS with CRUD
## Tools
- Express JS
- PostgreSQL 
- Pg Admin 4
- Visual Studio Code
- Postman
- Railway
---
## Author
- Alfan Lukeyan Rizki - 5025211046
---
## Analisis Kebutuhan 
---
### Conceptual Data Model (CDM)
Berdasarkan analisis kebutuhan pengguna, berikut merupakan desain tabel CDM untuk Schematics-BST

- Tabel peserta
    - id (primary key)
    - nama_peserta 
    - email_peserta
    - no_telp_peserta
    - password_peserta
- Tabel Seminar
    - id (primary key)
    - nama_seminar
    - deskripsi_seminar
    - tanggal_seminar
    - waktu_mulai_seminar
    - waktu_selesai_seminar
    - kapasitas_seminar
    - harga_tiket_reguler
    - harga_tiket_VIP
    - lokasi_id (foreign key)

- Tabel Lokasi
    - id (primary key)
    - nama_lokasi
    - alamat_lokasi

- Tabel Pembayaran
    - id (primary key)
    - jenis_pembayaran
    - tanggal_pembayaran
    - total_pembayaran
    - status_pembayaran (sudah/sedang/belum bayar)
    - peserta_id (foreign key)

- Tabel Tiket
    - id (primary key)
    - jenis_tiket
    - harga_tiket
    - kode_unik_tiket
    - peserta_id (foreign key)
    - seminar_id (foreign key)

- Tabel Pendaftaran
    - id (primary key)
    - tanggal_pendaftaran
    - status_pendaftaran (terdaftar/membatalkan)
    - peserta_id

Adapun antar tabel yang dapat terbentuk adalah sebagai berikut 
- Tabel Peserta:
    - Setiap peserta bisa melakukan banyak pembayaran, maka terdapat relasi one-to-many antara tabel Peserta dan Pembayaran.
    - Setiap peserta bisa memiliki banyak tiket, maka terdapat relasi one-to-many antara tabel Peserta dan Tiket.
    - Setiap peserta bisa melakukan banyak pendaftaran seminar, maka terdapat relasi one-to-many antara tabel Peserta dan Pendaftaran.
- Tabel Seminar:
    - Setiap seminar diadakan di satu lokasi, maka terdapat relasi many-to-one antara tabel Seminar dan Lokasi.
    - Satu seminar bisa memiliki banyak tiket, maka terdapat relasi one-to-many antara tabel Seminar dan Tiket.
    - Satu seminar bisa diikuti oleh banyak peserta, maka terdapat relasi many-to-many antara tabel Seminar dan Peserta melalui tabel Pendaftaran.
- Tabel Lokasi:
    - Setiap lokasi bisa menjadi tempat diadakannya banyak seminar, maka terdapat relasi one-to-many antara tabel Lokasi dan Seminar.
- Tabel Pembayaran:
    - Setiap pembayaran dilakukan oleh satu peserta, maka terdapat relasi many-to-one antara tabel Pembayaran dan Peserta.
- Tabel Tiket:
    - Setiap tiket dimiliki oleh satu peserta, maka terdapat relasi many-to-one antara tabel Tiket dan Peserta.
    - Setiap tiket dimiliki oleh satu seminar, maka terdapat relasi many-to-one antara tabel Tiket dan Seminar.
- Tabel Pendaftaran:
    - Setiap pendaftaran dilakukan oleh satu peserta, maka terdapat relasi many-to-one antara tabel Pendaftaran dan Peserta.
    - Setiap pendaftaran dilakukan untuk satu seminar, maka terdapat relasi many-to-one antara tabel Pendaftaran dan Seminar.


Design:
![CDM Schematics BST](https://github.com/AlfanLukeyan/trash/blob/main/AlfanLukeyanRizki_Tugas2MCI/Schematics-BST-2023-04-08_17-08.png?raw=true)

### Physical Data Model (PDM)
Berikut merupakan design PDM hasil generate dari CDM:
![PDM Schematics BST](https://github.com/AlfanLukeyan/trash/blob/main/AlfanLukeyanRizki_Tugas2MCI/Schematics-BST_Physical_Export-2023-04-08_18-45.png?raw=true)

---
## Dokumentasi API Postman 
Berikut merupakan dokumentasi postman, dapat diakses pada link berikut ini : [postman-documenter-link](https://documenter.getpostman.com/view/26740484/2s93XsY6nU)

---
## Website Schematics-BST
Berikut merupakan website Schematics BST yang telah di deploy dengan menggunakan Railway: [schematics-bst-website](https://alfanlukeyanrizkitugas2mci-production.up.railway.app)


