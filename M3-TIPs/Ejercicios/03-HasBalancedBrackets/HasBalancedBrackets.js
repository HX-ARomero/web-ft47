function HasBalancedBrackets (string) {
  // Your code here:
  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")"
  }
  //* DICCIONARIOS: https://rodrwan.medium.com/dictionaries-en-js-e2abd196f720
  const openBrackets = [];

  for (const bracket of string) {
    if(validBrackets[bracket]) {
      openBrackets.push(bracket);
    } else if (validBrackets[openBrackets.pop()] !== bracket) {
      return false;
    }
  }
  return !openBrackets.length;
}

//* 1. Recorrer string => for
//* 2. Detectar si es de apertura o cierre => objeto
//*    A. Apertura => push en openBrackets
//*    B. Cierre => verificar que sea la pareja del último abierto
//*       Si es la pareja => elimino el último de openBrackets
//*       Si no es la pareja => return false
//* 3. Evaluar openBrakets
//*    .length === 0 => true => Están Balanceados
//*    .length !== 0 => false => No Están Balanceados


console.log(HasBalancedBrackets('{[]()}')); // (true)
// console.log(HasBalancedBrackets('{[(])}')); // (false)
// console.log(HasBalancedBrackets('{[(')); // (false)
// console.log(HasBalancedBrackets('{[([{()[]{}}])]}')); // (true)
// console.log(HasBalancedBrackets('{[]}}')); // (false)

module.exports = HasBalancedBrackets
