const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class exercise extends Model {}
exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    
    },

    sets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    reps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise'
  }
);

module.exports = exercise;