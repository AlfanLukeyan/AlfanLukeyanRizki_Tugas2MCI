'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tikets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis_tiket: {
        allowNull: false,
        type: Sequelize.STRING
      },
      harga_tiket: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      kode_unik_tiket: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      peserta_id: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      seminar_id: {
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
    await queryInterface.dropTable('tikets');
  }
};