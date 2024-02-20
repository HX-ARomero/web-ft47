const discValidator = ({ name, released, rating, genre, band }) => {
  const errors = {};

  if (!name) 
    errors.message = "name es requerido";
  if (!released)
    errors.message = "released es requerido";
  if (!rating)
    errors.message = "rating es requerido";

  if (typeof name !== "string")
    errors.message = "name debe ser un string";
  if (typeof released !== "string")
    errors.message = "released debe ser un string";
  if (typeof genre !== "string")
    errors.message = "genre debe ser un string";

  if (rating < 1)
    errors.message = "rating debe ser al menos 1";
  if (rating > 10)
    errors.message = "rating no puede ser mayor a 10";

  const allowedBands = [
    "Rock", "Trash", "Pop", "Reggae", "Salsa"
  ];
  if (!allowedBands.includes(genre))
    errors.message = `${genre} no es un valor permitido para genre`;

  return errors;
};

module.exports = discValidator;