const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDB = require("./config/connectDB");
// config dot env file
dotenv.config();

// Database call
connectDB();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
// User routed
app.use("/api/v1/users", require("./routes/userRoute"));

// transection routes
app.use("/api/v1/transections", require("./routes/transectionRoute"));

// static files
//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = 8080 || process.env.PORT;

// listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

