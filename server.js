require("dotenv").config();

const express = require("express");
const cookieparser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.routes");
const authMiddleware = require("./middleware/authMiddleware")

connectDB();

const app = express();
app.use(express.json());
app.use(cookieparser());

app.use("/auth", authRoutes);

app.get("/home", authMiddleware,(req,res)=>{
    res.send(req.user);
});

let PORT = process.env.PORT||4000;

app.listen(PORT, (req,res) => {
    console.log(`server is running on port ${PORT}`);
});
