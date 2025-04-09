//RESUELVE LOS EJERCICIOS AQUÍ

//1
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];

const ana = empleados[1];

//2

const emailLuis = empleados[0].email;

//3

// esta es una forma de destructurar el array que era [a,b] y en vez de poner const array pones solo las []...

let a = 5;
let b = 3;

[a, b] = [b, a];

//4

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

const { yesterday, today, tomorrow } = HIGH_TEMPERATURES;

const maximaHoy = today;
const maximaManana = tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

//5

function sumEveryOther(...number) {
  return numbers.reduce((num1, num2) => num1 + num2, 0);
}

sumEveryOther(1, 2, 3, 4, 5);
sumEveryOther(1, 2, 3);
sumEveryOther(1, 1, 1, 1, 1, 1, 1);

//6

function addOnlyNums(...numbers) {
  return numbers
    .filter((item) => typeof item === "number")
    .reduce((num1, num2) => num1 + num2, 0);
}

addOnlyNums(1, "perro", 2, 4);
addOnlyNums(1, "perro", 6, "gato", "ratón", 7);
addOnlyNums(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina");

//7

function countTheArgs(...args) {
  return args.length;
}

countTheArgs(1, "perro", 6, "gato", "ratón", 7);
countTheArgs(1, "perro", 6, "gato", 2, "ratón", 7, 3, "vaca", "gallina");

//8

function combineTwoArrays(array1, array2) {
  const mergeArray = [...array1, ...array2];
  console.log(mergeArray);
  return mergeArray;
}

combineTwoArrays([1, 2, 3], [4, 5, 6]);
combineTwoArrays([1, 2], [3, 4, 5, 6]);
combineTwoArrays([1], [2, 3, 4, 5, 6]);

//9

function onlyUniques(...array) {
  const arraySinDuplicados = [...new Set(array)];
  console.log(arraySinDuplicados);

  return arraySinDuplicados;
}

onlyUniques("gato", "pollo", "cerdo", "cerdo");
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8);

//10

function combineAllArrays(...array) {
  console.log(array.flat());
  return array.flat();
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]);
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12]);

//11

function sumAndSquare(...args) {
  return args.reduce((sum, num) => sum + num ** 2, 0);
}

sumAndSquare(1, 2, 3, 4, 5, 6);
sumAndSquare(1, 2, 3, 5);
