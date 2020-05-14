'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          args: true,
          msg: "Username is required"
        },
        notEmpty: {
          args: true,
          msg: "Username is required"
        }
      }
    },
    room: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Room is required"
        },
        notEmpty: {
          args: true,
          msg: "Room is required"
        }
      }
    },
    row: {
      type: DataTypes.INTEGER
    } ,
    column: {
      type:DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'User',
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};