const express = require("express");
const router = express.Router();

const validateTitle = require("../middlewares/validateTitle");
const validateAuthor = require("../middlewares/validateAuthor");
const validateGenre = require("../middlewares/validateGenre");
const validateYear = require("../middlewares/validateYear");

const bookController = require("../controllers/bookController");

// CREATE
router.post(
  "/books",
  (req, res, next) => {
    console.log("Entrou na rota");
    next();
  },
  validateTitle,
  validateAuthor,
  validateGenre,
  validateYear,
  bookController.createBook
);

// READ ALL
router.get("/books", bookController.getBooks);

// READ BY ID
router.get("/books/:id", bookController.getBookById);

// UPDATE
router.patch("/books/:id", bookController.updateBook);

// DELETE
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;