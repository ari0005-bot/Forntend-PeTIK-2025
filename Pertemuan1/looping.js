/**
 * Looping For:
 * - Nilai Awal
 * - Nilai Akhir/Kondisi Akhir
 * - Increment/Decrement
 */

for(let i = 0; i < 10; i++) {
    console.log(`looping ke-${i}`);
}

/**
 * Looping While:
 * - Menjalankan kode selama kondisi terpenuhir.
 * - Dicek dlu baru dijalankan
 */

let nilai = 0;
while (nilai < 5) {
    console.log(nilai);
    nilai++;
}

/**
 * Looping do while:
 * - Menjalankan kode selama kondisi terpenuhir.
 * - Dijalankan dulu baru di cek
 */
let input;
let password = "admin123";
do {
 input = prompt("Masukan Password")
} while (input != password);
