'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pembayaran.belongsTo(models.peserta, {
        foreignKey: 'peserta_id',
      })
    }
  }
  pembayaran.init({
    jenis_pembayaran: DataTypes.STRING,
    tanggal_pembayaran: DataTypes.DATEONLY,
    total_pembayaran: DataTypes.DECIMAL,
    status_pembayaran: DataTypes.DECIMAL,
    peserta_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'pembayaran',
  });
  return pembayaran;
};