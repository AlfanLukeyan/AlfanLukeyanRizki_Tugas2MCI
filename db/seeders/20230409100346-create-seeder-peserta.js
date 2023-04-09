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

    await queryInterface.bulkInsert('pesertas', [
      {
        id: 1,
        nama_peserta: 'Alfan Lukeyan Rizki',
        email_peserta: 'alfanlukeyanrizki@gmail.com',
        no_telp_peserta: '081265959545',
        password_peserta: '123456',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        id: 2,
        nama_peserta: 'Rizki Bismillah',
        email_peserta: 'rizkibismillah123@gmail.com',
        no_telp_peserta: '081265959545',
        password_peserta: '111111',
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
