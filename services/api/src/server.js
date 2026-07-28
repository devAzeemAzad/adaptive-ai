require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/database");

const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
