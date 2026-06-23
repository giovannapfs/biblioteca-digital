const validateYear = (req, res, next) => {
  const { year } = req.body;

  if (
    year === undefined ||
    typeof year !== "number" ||
    year < 1000 ||
    year > new Date().getFullYear()
  ) {
    return res.status(400).json({
      error: "O ano deve estar entre 1000 e o ano atual.",
    });
  }
console.log("Passou validateYear");
  next();
};

module.exports = validateYear;