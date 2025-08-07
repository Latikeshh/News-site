// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/noteRoutes"); // 👈 Rename to ./routes/noteRoutes.js for clarity
require("dotenv").config(); // 👈 Load .env variables

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = "mongodb://localhost:27017/News";

// -------------------- Middleware --------------------
app.use(cors());               // Enable CORS
app.use(express.json());      // Parse JSON body

// -------------------- MongoDB Connection --------------------
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// -------------------- Routes --------------------
app.use("/api", route); // Use /api prefix for cleaner URL structure

// -------------------- Health Route --------------------
app.get("/", (req, res) => {
    res.send("✅ News backend server running");
});

// -------------------- Start Server --------------------
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
