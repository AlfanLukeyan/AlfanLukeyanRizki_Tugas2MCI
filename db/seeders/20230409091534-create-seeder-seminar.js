'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('seminars', [
      {
        id: 1,
        nama_seminar: 'Seminar 1ExploIT Talkshow & Exhibition Seri 4.0',
        deskripsi_seminar: 'ExploIT ARA 4.0 akan hadir untuk mewadahi hasil inovasi mahasiswa/i Indonesia dalam bidang Internet of Things',
        tanggal_seminar: '2023-04-01',
        waktu_mulai_seminar: '09:00:00',
        waktu_selesai_seminar: '13:00:00',
        kapasitas_seminar: 100,
        harga_tiket_regular: 100000,
        harga_tiket_vip: 200000,
        lokasi_id: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        nama_seminar: 'BURSA KARIR ITS-40',
        deskripsi_seminar: 'Bursa Karir ITS-40 bertujuan untuk membantu mahasiswa/i ITS dalam mencari pekerjaan dan pengalaman kerja.',
        tanggal_seminar: '2023-03-14',
        waktu_mulai_seminar: '09:00:00',
        waktu_selesai_seminar: '12:00:00',
        kapasitas_seminar: 100,
        harga_tiket_regular: 0,
        harga_tiket_vip: 500000,
        lokasi_id: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
