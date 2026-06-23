const validateGenre = (req, res, next) => {
  const { genre } = req.body;

  if (!genre || typeof genre !== "string") {
    return res.status(400).json({
      error: "O gênero é obrigatório.",
    });
  }
console.log("Passou validateGenre");
  next();
};

module.exports = validateGenre;