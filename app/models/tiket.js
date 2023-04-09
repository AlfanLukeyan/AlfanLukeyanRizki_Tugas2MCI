'use strict';
const {
  Model
} = require('sequelize');
const peserta = require('./peserta');
module.exports = (sequelize, DataTypes) => {
  class tiket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tiket.belongsTo(models.peserta, {
        foreignKey: 'peserta_id',
      })
      tiket.belongsTo(models.seminar, {
        foreignKey: 'seminar_id',
      })
    }
  }
  tiket.init({
    jenis_tiket: DataTypes.STRING,
    harga_tiket: DataTypes.DECIMAL,
    kode_unik_tiket: DataTypes.STRING,
    peserta_id: DataTypes.INTEGER,
    seminar_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tiket',
  });
  return tiket;
};