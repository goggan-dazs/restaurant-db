'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     review.hasMany(models.restaurant, {
       foreignKey: "restaurant_id",
     });
     review.hasMany(models.reviewer, {
       foreignKey: "reviewer_id",
     })
    }
  }
  review.init({
    id: DataTypes.INTEGER,
    reviewer_id: DataTypes.INTEGER,
    stars: {
     type: DataTypes.INTEGER,
     validate: {
       min: 0,
       max: 5,
     },
    },
    title: DataTypes.STRING,
    review: DataTypes.STRING,
    restaurant_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};