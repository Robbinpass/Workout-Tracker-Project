const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
const sequelize = require('../../config/connection.js');

class workout extends Model {}

workout.init(
  {
    workout_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workoutName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upperBodyPushName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upperBodyPushWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upperBodyPushSets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upperBodyPushReps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upperBodyPullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    upperBodyPullWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upperBodyPullSets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    upperBodyPullReps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lowerBodyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lowerBodyWeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lowerBodySets: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lowerBodyReps: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout'
  }
);

module.exports = workout;