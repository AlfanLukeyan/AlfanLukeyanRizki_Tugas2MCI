'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_pembayaran: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_pembayaran: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      total_pembayaran: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      status_pembayaran: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      peserta_id: {
        allowNull: false,
        foreignKey: true,
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
    await queryInterface.dropTable('pembayarans');
  }
};