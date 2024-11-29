'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blogs extends Model {
    static associate(models) {
    }
  }

  Blogs.init({
    titulo: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false, 
      defaultValue: DataTypes.NOW, 
    },
  }, {
    sequelize,
    modelName: 'Blogs',
    tableName: 'blogs', 
    timestamps: true, 
  });

  return Blogs;
};
