const express = require("express");

const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

connectDB();

const port = process.env.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/requests", require("./routes/regRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
