const Sequelize = require('sequelize');
const sequelize= require('../connection/database');
const Player = sequelize.define('Player', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
      
    },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
     
      date: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        photo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        birth: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        career: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
       matches: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      score: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
      fifties: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
      centuries: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
      wickets: {
          type: Sequelize.BIGINT,
          allowNull: false,
        },
       average: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
    });
  
module.exports= Player;