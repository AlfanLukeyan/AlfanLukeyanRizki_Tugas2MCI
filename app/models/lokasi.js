'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lokasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lokasi.hasMany(models.seminar, {
        foreignKey: 'lokasi_id',
      })
    }
  }
  lokasi.init({
    nama_lokasi: DataTypes.STRING,
    alamat_lokasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lokasi',
  });
  return lokasi;
};