const path = require("path");
const express = require("express");

const dotenv = require("dotenv").config();

const { errorHandler } = require("./middleware/errorMiddleware");

const connectDB = require("./config/db");

connectDB();

const port = process.env.port || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/requests", require("./routes/regRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//serve frontend

if (process.env_NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/buid")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
