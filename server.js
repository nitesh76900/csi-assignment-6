const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
