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
    await queryInterface.bulkInsert('lokasis', [
      {
        id: 1,
        nama_lokasi: 'Balai Pemuda Surabaya',
        alamat_lokasi: 'Jl. Gubernur Suryo No.15, Embong Kaliasin, Kec. Genteng, Kota SBY, Jawa Timur 60271',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        nama_lokasi: 'Gedung Pusat Robotika Kampus ITS Sukolilo',
        alamat_lokasi: 'Jalan Raya ITS Campus ITS Sukolilo Surabaya Jawa Timur 60111, Keputih, Kec. Sukolilo, Kota SBY, Jawa Timur 60117',
        createdAt : new Date(),
        updatedAt : new Date()
      }]);
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
