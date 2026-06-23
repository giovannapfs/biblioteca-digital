const Book = require("../models/book");

// Criar livro
const createBook = async (req, res) => {
  console.log("Entrou no createBook");

  try {
    const { title, author, year, genre } = req.body;

    const newBook = new Book({
      title,
      author,
      year,
      genre,
    });

    await newBook.save();

    res.status(201).json(newBook);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Erro ao criar livro" });
  }
};

// Listar todos os livros
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

// Buscar livro por ID
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(book);
  } catch (err) {
    next(err);
  }
};

// Atualizar livro
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedBook) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar livro." });
  }
};

// Excluir livro
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json({ message: "Livro excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao excluir livro" });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};