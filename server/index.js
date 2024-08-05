const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
// app.use((express.urlencoded = true));

const userRoutes = require("./routes/user");
app.use("api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server Running on ${PORT}`);
});
