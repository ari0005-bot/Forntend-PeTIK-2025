/**
 * Function adalah blok kode yang dapat digunakan kembali
 * Untuk melakukan tugas tertentu.
 * Macam-macam Function :
 * 1. Function declaration
 * 2. Function expression
 * 3. Arroe Function
 */

// 1. Function Declaration
function sapa (nama) {
    console.log(`Halo ${nama}`);
}
sapa("Bambang");

// 2. Function Expression
const salam = function(nama) {
    console.log(`Asssalamualaikum ${nama}`);
    }
    salam("Agus");

// 3. Arrow Function
const ucap = (nama) => {
    console.log(`Selamat Datang ${nama}`);
}
ucap("Siti")