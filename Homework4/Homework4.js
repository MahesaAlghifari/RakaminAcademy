//Buatlah 100 nilai random (1 sampai 50) pada 1 array
// var nilaiRandom = [];

// for (var i = 0; i < 100; i++) {
//   var nilai = Math.floor(Math.random() * 50) + 1;
//   nilaiRandom.push(nilai);
// }

// console.log(nilaiRandom);



// Pecah menjadi 2 array berdasarkan index ganjil ataupun index genap
// var nilaiRandom = [];

// for (var i = 0; i < 100; i++) {
//   var nilai = Math.floor(Math.random() * 50) + 1;
//   nilaiRandom.push(nilai);
// }

// console.log("Array Asal:");
// console.log(nilaiRandom);

// var nilaiGenap = [];
// var nilaiGanjil = [];

// // Memisahkan nilai berdasarkan sifat ganjil atau genap
// for (var i = 0; i < nilaiRandom.length; i++) {
//   if (nilaiRandom[i] % 2 === 0) {
//     nilaiGenap.push(nilaiRandom[i]);
//   } else {
//     nilaiGanjil.push(nilaiRandom[i]);
//   }
// }

// console.log("Nilai Genap:");
// console.log(nilaiGenap);

// console.log("Nilai Ganjil:");
// console.log(nilaiGanjil);



var nilaiRandom = [];

for (var i = 0; i < 100; i++) {
  var nilai = Math.floor(Math.random() * 50) + 1;
  nilaiRandom.push(nilai);
}

console.log("Array Asal:");
console.log(nilaiRandom);

var nilaiGenap = [];
var nilaiGanjil = [];

for (var i = 0; i < nilaiRandom.length; i++) {
  if (nilaiRandom[i] % 2 === 0) {
    nilaiGenap.push(nilaiRandom[i]);
  } else {
    nilaiGanjil.push(nilaiRandom[i]);
  }
}

var minGenap = Math.min(...nilaiGenap);
var maxGenap = Math.max(...nilaiGenap);
var totalGenap = nilaiGenap.reduce((a, b) => a + b, 0);
var rataRataGenap = totalGenap / nilaiGenap.length;
var minGanjil = Math.min(...nilaiGanjil);
var maxGanjil = Math.max(...nilaiGanjil);
var totalGanjil = nilaiGanjil.reduce((a, b) => a + b, 0);
var rataRataGanjil = totalGanjil / nilaiGanjil.length;

console.log("Nilai Genap:");
console.log("Min: " + minGenap);
console.log("Max: " + maxGenap);
console.log("Total: " + totalGenap);
console.log("Rata-rata: " + rataRataGenap);

console.log("Nilai Ganjil:");
console.log("Min: " + minGanjil);
console.log("Max: " + maxGanjil);
console.log("Total: " + totalGanjil);
console.log("Rata-rata: " + rataRataGanjil);


var perbandingan = {
  "min yang lebih besar": minGenap > minGanjil ? "array genap" : "array ganjil",
  "max yang lebih besar": maxGenap > maxGanjil ? "array genap" : "array ganjil",
  "Total memiliki nilai sama antara array genap dan ganjil": totalGenap === totalGanjil,
  "rata-rata lebih besar": rataRataGanjil > rataRataGenap ? "array ganjil" : "array genap",
};

console.log("Hasil Perbandingan:");
for (var kriteria in perbandingan) {
  console.log(kriteria + ": " + perbandingan[kriteria]);
}
