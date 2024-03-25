// Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.
function multiplicacion(a, b) {
  return a * b;
}

// Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

// COMO HAGO PARA QUE UN PROMT ME PASE UN NUMB
// let edad = prompt("Cuantos años tienes");
// console.log(typeof edad);
// // if (typeof edad != "number") {
// //   console.log("Debes poner numeros"); ;
// // } else
//  if (edad < 18) {
//   console.log("Eres menor de edad");
// } else if (edad < 70) {
//     console.log("Eres mayor de edad");

// } else {
//   console.log("Eres un adulto mayor");
// }

// Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".
function sumaTresNumeros(a, b, c) {
  if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
    return "Debo ser ejecutada con números";
  }
  return a + b + c;
}
console.log(sumaTresNumeros(2, 2, "2"));
function sumaTresNumeros(a, b, c) {
  if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
    return "Debo ser ejecutada con números";
  }
  return a + b + c;
}
console.log(sumaTresNumeros(2, 2, "2"));
// Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.
function primerosTresCaracteres(x) {
  if (typeof x !== "string") {
    return "Debo ser ejecutada con un string";
  } else if (x.length < 3) {
    return x;
  } else {
   return x.substring(0, 2);
  }
}
console.log(primerosTresCaracteres('hola'));
// Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'No es un formato correcto'.
function getPrecioMostrarIVA(x) {
    if (typeof x != "number") {
        return "No es un formato correcto";
      }
      return x+ (x*=0.21)
}
console.log(getPrecioMostrarIVA(1));
// Ejercicios extras
// Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.
function penultimoCaracter(x) {
    if (typeof x !== "string") {
        return "Debo ser ejecutada con un string";
      } else if (x.length < 2) {
        return x;
      } else {
       return x.at(-2);
      }
}
console.log(penultimoCaracter("holza"));
// Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.
function potencia(a,b) {
    return a**b
}
console.log(potencia(2,4));