/**
 * Membuat objek bisa dengan :
 * 1. {}
 * 2. new object()
 */

// Dengan kurung kurawal{}
const user = {
  name: "Ucup",
  age: 18,
  address: "Depok",
};

//Untuk menampilkan data semua objek
for (const key in user) {
  console.log(user[key]);
}



// Dengan new object()
const user2 = new Object();
user2.name = "Udin";
user2.age = 17;
user2.address = "Bogor";

//Untuk menampilkan data semua objek
for (const key in user2) {
  console.log(user2[key]);
}
