const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const movieRoute = require("./routes/movies");

dotenv.config();


mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('DB Connection Successful'))
    .catch((err) => {
        console.log(err);
    });
app.use(express.json());

app.use("/movies", movieRoute);

app.listen(9000, () => {
    console.log("Backend server is running!");
  });