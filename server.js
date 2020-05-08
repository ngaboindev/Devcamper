const express = require('express');
const dotenv = require('dotenv');

//using environment variables
dotenv.config({ path : "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`listening on ${PORT}(${process.env.NODE_ENV})`))