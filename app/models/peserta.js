'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class peserta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      peserta.hasMany(models.tiket, {
        foreignKey: 'peserta_id',
      })
      peserta.hasMany(models.pembayaran, {
        foreignKey: 'peserta_id',
      })
    }
  }
  peserta.init({
    nama_peserta: DataTypes.STRING,
    email_peserta: DataTypes.STRING,
    no_telp_peserta: DataTypes.STRING,
    password_peserta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'peserta',
  });
  return peserta;
};