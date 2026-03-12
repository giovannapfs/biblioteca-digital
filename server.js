const express = require("express");
const connectDB = require("./config/config");
const app = express();
connectDB();
app.use(express.json());
app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/divide", (req, res) => {
 try {
   const numerador = 10;
   const denominador = 0;


   if (denominador === 0) {
     throw new Error("Não é possível dividir por zero.");
   }


   const resultado = numerador / denominador;
   res.json({ resultado });
 } catch (err) {
   res.status(400).json({ error: err.message });
 }
});