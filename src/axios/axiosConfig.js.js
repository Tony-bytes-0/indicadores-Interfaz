require("dotenv").config();

const axios = require("axios");

const instance = axios.create({
  baseURL: `http://localhost:${process.env.API_PORT}`,
});

module.exports = instance;
