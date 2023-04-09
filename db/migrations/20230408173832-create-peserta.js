'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pesertas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_peserta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email_peserta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      no_telp_peserta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password_peserta: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pesertas');
  }
};