/**
 * Promise terdapat tiga status :
 * 1. Panding (tertunda)
 * 2. resolve/fullfield (terpenuhi)
 * 3. reject (ditolak)
 *
 */

function rebusAir() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Rebus air");
    }, 3000);
  });
}

function masakMIe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Masak Air");
    }, 2000);
  });
}

function makanMie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Makan Mie");
    }, 4000);
  });
}

// rebusAir()
// .then((outputRebus) => {
//   console.log(outputRebus);
//   return masakMIe();
// })
// .then((outMasak) => {
//     console.log(outMasak);
//     return makanMie();
// })
// .then((outMakan) => {
//     console.log(outMakan);
// })
// .catch((err) => {
//     console.error(`Gagal ${err}`);
// });

async function buatMie() {
  try {
    const rebus = await rebusAir();
    console.log(rebus);
    const masak = await masakMIe();
    console.log(masak);
    const makan = await makanMie();
    console.log(makan);
  } catch (error) {
    console.error(`Gagal ${error}`);
  }
}
buatMie();
