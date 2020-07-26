const knex = require("knex");
const knexConfig = require("../../knexfile");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexConfig[environment]);

//this is for live connection with our db with knex
