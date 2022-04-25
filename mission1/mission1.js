/**
 * Calcula el numero de pasos requeridos para llevar
 * el numero pasado como parametro hasta cero.
 * @param {number} pasos Numero de pasos
 * @return {number}
 */
const numPasos = (pasos) => {
  let count = 0;
  while (pasos > 0) {
    if (pasos % 2 === 0) {
      pasos /= 2;
      count++;
    } else {
      pasos--;
      count++;
    }
  }

  return count;
};

/**
 * Construye una constrtraseña a partir del texto suministrado.
 * @param {string} text
 */
function contrasenya(text) {
  let chars = text.toLocaleLowerCase().split("");
  let password = "";

  chars.forEach((char) => {
    if (char === "a") password += "4";
    else if (char === "e") password += "3";
    else if (char === "i") password += "1";
    else if (char === "o") password += "0";
    else if (char === " ") null;
    else password += char;
  });

  return password;
}

/**
 *  Formatea el numero de likes.
 * @param {number} num
 */
function likes(num) {
  if (num < 1e3) {
    return num.toString();
  } else if (num < 1e6) {
    num = Math.floor(num / 1e3);
    return num + "K";
  } else {
    num = Math.floor(num / 1e6);
    return num + "M";
  }
}
/**
 * Genera un codigo usando las dos primeras letras de la palabra
 * @param {string} text - texto original
 */
function generateCodigo(text) {
  let code = "";
  let words = text.split(" ");

  words.forEach((word) => {
    if (word.length >= 2) {
      code += word.slice(0, 2);
    } else if (word.length > 0) {
      code += word[0];
    }
  });

  return code;
}

console.log(generateCodigo("hola mundo"));
console.log(generateCodigo("juan david berbero"));
console.log(generateCodigo(""));
