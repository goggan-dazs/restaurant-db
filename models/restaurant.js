'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      restaurant.belongsTo(models.review, {
        foreignKey: "restaurant_id",
        onDelete: "CASCADE",
      });
    }
  }
  restaurant.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'restaurant',
  });
  return restaurant;
};