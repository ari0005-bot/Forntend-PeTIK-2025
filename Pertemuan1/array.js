/**
 * Membuat array bisa dengan:
 * - []
 * - ()
 */

// Contoh yang pakai kurung siku
const fruits = ["Apel", "Anggur", "Jeruk"];
//push buat nambahin array dari belakan
fruits.push("Mangga");

//pop untuk menghapus dari belakang
fruits.pop()

//Untuk memanggil semua array yang ada
// fruits.forEach((fruit) => console.log(fruit));

const fruitUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitUpper);

const longNameFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNameFruits);




// Contoh yang pake kurung biasa
const animals = Array("Kucing", "Singa", "Elang");

//unshift buat nambahin array dari depan
animals.unshift("Kambing");

//shift untuk menghapus dari depan
animals.shift()

//Untuk memanggil semua array yang ada
// animals.forEach((animal) => console.log(animal));

// const animalLower = animals.map((animal) => animal.toLocaleLowerCase());
// console.log(animalLower);


//Menggabungkan dua array
const  combine = [...fruits, ...animals];

const foundItems = combine.find((item) => item.toLowerCase() === "apel".toLowerCase());
console.log(foundItems);

console.log(combine.includes("Singa"));
