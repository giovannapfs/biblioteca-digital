const validateAuthor = (req, res, next) => {
  const { author } = req.body;

  if (!author || typeof author !== "string" || author.length < 3) {
    return res.status(400).json({
      error: "O autor é obrigatório e deve ter pelo menos 3 caracteres.",
    });
  }
console.log("Passou validateAuthor");
  next();
};

module.exports = validateAuthor;