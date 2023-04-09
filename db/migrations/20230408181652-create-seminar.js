'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seminars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_seminar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deskripsi_seminar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_seminar: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      waktu_mulai_seminar: {
        allowNull: false,
        type: Sequelize.TIME
      },
      waktu_selesai_seminar: {
        allowNull: false,
        type: Sequelize.TIME
      },
      kapasitas_seminar: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      harga_tiket_regular: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      harga_tiket_vip: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      lokasi_id: {  
        allowNull: false,
        foreigntKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('seminars');
  }
};