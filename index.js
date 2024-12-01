require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router");
require("./connection");

const pratice = express();
pratice.use(cors());
pratice.use(express.json());
pratice.use(router);

const PORT = 3000 || process.env.PORT;

pratice.listen(PORT, () => {
  console.log(`The server has been connected at port ${3000}`);
});
