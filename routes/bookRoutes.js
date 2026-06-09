const express = require("express");
const router = express.Router();
const express = require("express");

const validateTitle = require("../middlewares/validateTitle");
const bookController = require('../controllers/bookController');
const Book = require("../models/book");

router.post("/books", validateTitle, bookController.createBook, async (req, res) => {
 try {
   const { title, author, year, genre } = req.body;
   const newBook = new Book({ title, author, year, genre });
   await newBook.save();
   res.status(201).json(newBook);
 } catch (err) {
   res.status(500).json({ error: "Erro ao criar livro" });
 }
});

// atividade prática - rota
router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
});

module.exports = router;