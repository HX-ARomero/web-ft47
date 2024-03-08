export default function validateUser(input) {
  const emailRegExp = /\S+@\S+\.\S+/;
  const passRegExp = /[A-Z]+/;
  const errors = {};

  //* NOMBRE
  input.name = input.name.trim();
  if(!input.name) errors.name = "Debe ingresar un nombre";
  else {
    if(input.name.length < 3) errors.name = "Nombre de al menos 5 caracteres";
    if(input.name.length > 25) errors.name = "Nombre de máximo 15 caracteres";
  }

  //* EMAIL
  if(!input.email) errors.email = "Debe ingresar un email";
  else {
    if(!emailRegExp.test(input.email)) errors.email = "Debe ingresar un email válido";
  }

  //* PASSWORD
  if(!input.password) errors.password = "Debe ingresar una contraseña";
  else {
    if(input.password.length < 4) errors.password = "Contraseña de al menos 4 caracteres";
    if(input.password.length > 8) errors.password = "Contraseña de máximo 8 caracteres";
    if(!passRegExp.test(input.password)) errors.password = "Contraseña con al menos una Mayúscula";
  }

  return errors;
}

// console.log(validateUser({
//   name: "Homero",
//   email: "ejemplo@gmail.com",
//   password: "123A"
// }))