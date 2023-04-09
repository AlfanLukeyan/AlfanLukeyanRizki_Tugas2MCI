'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('seminar_pendaftarans', {
      seminar_id: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      pendaftaran_id: {
        allowNull: false,
        primaryKey: true,
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
    await queryInterface.dropTable('seminar_pendaftarans');
  }
};