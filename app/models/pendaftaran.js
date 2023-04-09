'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pendaftaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pendaftaran.belongsTo(models.peserta, {
        foreignKey: 'peserta_id',
      })
      pendaftaran.hasMany(models.seminar_pendaftaran, {
        foreignKey: 'pendaftaran_id',
      })
      pendaftaran.belongsToMany(models.seminar, {
        through: models.seminar_pendaftaran,
        foreignKey: 'pendaftaran_id',
      })
    }
  }
  pendaftaran.init({
    waktu_pendaftaran: DataTypes.DATEONLY,
    status_pendaftaran: DataTypes.BOOLEAN,
    peserta_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'pendaftaran',
  });
  return pendaftaran;
};