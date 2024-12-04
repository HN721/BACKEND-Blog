require("dotenv").config();
const express = require("express");
const connectDb = require("./utils/ConnectDb");
const PostRoute = require("./Router/PostRoute");
const app = express();
connectDb();
//PORT
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use("/api", PostRoute);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
