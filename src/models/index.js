'use strict';

require('dotenv').config();
const{ Sequelize, DataTypes } = require('sequelize');
const jediSchema = require('./jedi.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const JediModel = jediSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, JediModel};
