'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seminar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      seminar.hasMany(models.seminar_pendaftaran, {
        foreignKey: 'seminar_id',
      })
      seminar.hasMany(models.tiket, {
        foreignKey: 'seminar_id',
      })
      seminar.belongsTo(models.lokasi, {
        foreignKey: 'lokasi_id',
      })
      seminar.belongsToMany(models.peserta, {
        through: 'seminar_pendaftaran',
        foreignKey: 'seminar_id',
      })
    }
  }
  seminar.init({
    nama_seminar: DataTypes.STRING,
    deskripsi_seminar: DataTypes.STRING,
    tanggal_seminar: DataTypes.DATEONLY,
    waktu_mulai_seminar: DataTypes.TIME,
    waktu_selesai_seminar: DataTypes.TIME,
    kapasitas_seminar: DataTypes.INTEGER,
    harga_tiket_regular: DataTypes.DECIMAL,
    harga_tiket_vip: DataTypes.DECIMAL,
    lokasi_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'seminar',
  });
  return seminar;
};