const mongoose = require("mongoose");

const databaseURl = process.env.DATABASE;

mongoose
  .connect(databaseURl)
  .then((res) => {
    console.log("Database has been conencted");
  })
  .catch((err) => {
    console.log(err);
  });
