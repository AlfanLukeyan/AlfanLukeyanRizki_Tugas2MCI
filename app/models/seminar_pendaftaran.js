'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seminar_pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      seminar_pendaftaran.belongsTo(models.seminar, {
        foreignKey: 'seminar_id',
      })
      seminar_pendaftaran.belongsTo(models.pendaftaran, {
        foreignKey: 'pendaftaran_id',
      })
    }
  }
  seminar_pendaftaran.init({
    seminar_id: DataTypes.INTEGER,
    pendaftaran_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seminar_pendaftaran',
  });
  return seminar_pendaftaran;
};