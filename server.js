const express = require("express");
const connectDB = require("./config/config");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const bookRoutes = require("./routes/bookRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// rotas
app.use("/api", bookRoutes);

// middleware global de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Ocorreu um erro no servidor.",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});