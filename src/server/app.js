const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8081;
const verifyToken = require("./middlewares/verifyToken");
const verifyUserId = require("./middlewares/verifyUserId");

// Arquivos de Rota
const auth = require("./routes/auth/index");
const tasks = require("./routes/tasks/index");

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Middleware verifyUserId aplicado globalmente, exceto na rota de login
app.use((req, res, next) => {
  if (req.path === "/api/auth/login" || req.path === "/api/auth/register") {
    // Não aplique verifyUserId na rota de login
    return next();
  }
  // Aplique verifyUserId em todas as outras rotas
  verifyUserId(req, res, next);
});
// Middleware verifyToken aplicado globalmente, exceto na rota de login
app.use((req, res, next) => {
  if (req.path === "/api/auth/login" || req.path === "/api/auth/register") {
    // Não aplique verifyToken na rota de login
    return next();
  }
  // Aplique verifyToken em todas as outras rotas
  verifyToken(req, res, next);
});

// Mongoose Configuration

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost/todolist")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.use("/api/auth", auth);
app.use("/manage", tasks);

app.listen(PORT, () => {
  console.log("Server started successfuly. http://localhost:" + PORT);
});
