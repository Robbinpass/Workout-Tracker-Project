const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class excercise extends Model {}


excercise.init(
  {
    // fields for muscle group, weight, reps, name

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'excercise'
  }
);

module.exports = excercise;