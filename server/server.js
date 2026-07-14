const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const donorRoutes = require("./routes/donorRoutes");
const locationRoutes = require("./routes/locationRoutes");


dotenv.config();


connectDB();


const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



// Authentication Routes
app.use("/api/auth", authRoutes);


// Donor Search Routes
app.use("/api", donorRoutes);


// Location Search Routes
app.use("/api", locationRoutes);



app.get("/", (req, res) => {
  res.send("BloodLink API Running...");
});



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});